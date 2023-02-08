import React, { useState } from "react";
import OcurredExpense from "./incurredExpense";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { confirmAlert } from "react-confirm-alert"; // Import
import { getBudgetById, removeIncurredExpense } from "../../api/budgetApi";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import {
  incurredExpenseCategories as categories,
  creditCards,
} from "../../data/common";

const IncurredExpensesList = ({ budget, setBudget }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentOcurredExpense, setCurrentOcurredExpense] = useState({
    amountCS: 0,
    amountUSD: 0,
  });

  function showModal() {
    setIsModalActive(true);
  }

  function handleDelete(id) {
    confirmAlert({
      title: "Eliminar",
      message: "¿Desea eliminar este gasto incurrido?",
      buttons: [
        {
          label: "Sí",
          onClick: () => {
            removeIncurredExpense({
              incurredExpenseId: id,
              budgetId: budget.id,
            }).then((statusCode) => {
              if (statusCode === 200) {
                getBudgetById(budget.id).then((response) =>
                  setBudget(unmarshall(response[0]))
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
      <div className="block">
        <div className="box">
          <h1 className="title mb-6">Gastos incurridos</h1>
          <div className="block level-right">
            <button
              className="button is-link"
              onClick={() => {
                showModal();
              }}
            >
              Agregar
            </button>
          </div>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Descripcion</th>
                <th className="has-text-centered">Categoria</th>
                <th className="has-text-centered">Tarjeta</th>
                <th className="has-text-right">Monto CS</th>
                <th className="has-text-right">Monto USD</th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th className="has-text-right">
                  {budget.incurredExpenses?.totalCS?.toLocaleString("es-NI", {
                    style: "currency",
                    currency: "NIO",
                  })}
                </th>
                <th className="has-text-right">
                  {budget.incurredExpenses?.totalUSD?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </th>
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              {budget?.incurredExpenses?.items?.length &&
                budget.incurredExpenses.items.map((incurredExpense) => (
                  <tr key={incurredExpense.id}>
                    <td className="has-text-left">
                      <button
                        className="button is-ghost"
                        onClick={() => {
                          setCurrentOcurredExpense(incurredExpense);
                          showModal();
                        }}
                      >
                        {incurredExpense.description}
                      </button>
                    </td>
                    <td>
                      {
                        categories.find(
                          (c) => c.value === incurredExpense.category
                        ).text
                      }
                    </td>
                    <td>
                      {
                        creditCards.find(
                          (cc) => cc.id === incurredExpense.creditCard
                        ).name
                      }
                    </td>
                    <td className="has-text-right">
                      {incurredExpense.amountCS.toLocaleString("es-NI", {
                        style: "currency",
                        currency: "NIO",
                      })}
                    </td>
                    <td className="has-text-right">
                      {incurredExpense.amountUSD.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td>
                      <span className="icon">
                        <button
                          onClick={() => handleDelete(incurredExpense.id)}
                          className="button is-danger is-small is-outlined"
                        >
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <OcurredExpense
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        budget={budget}
        setBudget={setBudget}
        ocurredExpense={currentOcurredExpense}
        setOcurredExpense={setCurrentOcurredExpense}
        categories={categories}
        creditCards={creditCards}
      />
    </>
  );
};

export default IncurredExpensesList;
