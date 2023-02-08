import React, { useState, useEffect } from "react";
import { getBudgets, cloneBudget } from "../../api/budgetApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import CloneBudget from "./cloneBudget";

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

  return (
    <>
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
                <td>{budget.month}</td>
                <td>{budget.year}</td>
                <td>
                  <div className="level">
                    <span className="icon level-item">
                      <a
                        href={"/budget/" + budget.id}
                        className="button is-link is-small is-outlined"
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </a>
                    </span>
                    <span className="icon level-item">
                      <a
                        className="button is-link is-small is-outlined"
                        onClick={() => onClone(budget.id)}
                      >
                        <FontAwesomeIcon icon={faClone} />
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
