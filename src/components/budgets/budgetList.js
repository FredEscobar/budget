import React, { useState, useEffect } from "react";
import { getBudgets, removeBudget } from "../../api/budgetApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import CloneBudget from "./cloneBudget";
import { confirmAlert } from "react-confirm-alert";
import { months } from "../../data/common";

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);
  const [budgetToCloneId, setBudgetToCloneId] = useState();
  const [modalIsActive, setModalIsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBudgets();
      setBudgets(data.map((b) => unmarshall(b)));
    };

    fetchData().catch(console.error);
  }, []);

  function onClone(budgetId) {
    setBudgetToCloneId(budgetId);
    setModalIsActive(true);
  }

  function handleDelete(budget) {
    confirmAlert({
      title: "Eliminar",
      message: "¿Desea eliminar este presupuesto",
      buttons: [
        {
          label: "Sí",
          onClick: () => {
            removeBudget({
              budgetId: budget.id,
              year: budget.year.toString(),
            }).then((statusCode) => {
              if (statusCode === 200) {
                getBudgets().then((response) =>
                  setBudgets(response.map((b) => unmarshall(b)))
                );
              }
            });
          },
        },
        {
          label: "No",
        },
      ],
    });
  }

  return (
    <>
      <h1 className="subtitle is-2 has-text-left my-5">Presupuestos</h1>

      <table className="table is-fullwidth mt-5">
        <thead>
          <tr>
            <th className="has-text-centered">Mes</th>
            <th className="has-text-centered">Año</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {budgets.map((budget) => {
            return (
              <tr key={budget.id}>
                <td>{months.find((m) => m.number === budget.month)?.name}</td>
                <td>{budget.year}</td>
                <td>
                  <div className="is-justify-content-center">
                    <span className="m-1">
                      <a
                        title="Ver detalle"
                        href={"/budget/" + budget.id}
                        className="button is-link is-small is-outlined"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </a>
                    </span>
                    <span className="m-1">
                      <a
                        title="Clonar"
                        className="button is-link is-info is-small is-outlined"
                        onClick={() => onClone(budget.id)}
                      >
                        <FontAwesomeIcon icon={faClone} />
                      </a>
                    </span>
                    <span className="m-1">
                      <a
                        title="Eliminar"
                        className="button is-link is-danger is-small is-outlined"
                        onClick={() => handleDelete(budget)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </a>
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CloneBudget
        isActive={modalIsActive}
        setIsActive={setModalIsActive}
        budgetId={budgetToCloneId}
        setBudgets={setBudgets}
      />
    </>
  );
};

export default BudgetList;
