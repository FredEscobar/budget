import React, { useState } from "react";
import ExpectedExpense from "./expectedExpense";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { getBudgetById, removeExpectedExpense } from "../../api/budgetApi";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const ExpensesList = ({ period, budget, setBudget }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentExpense, setCurrentExpense] = useState({
    id: "",
    description: "",
    valueUSD: 0,
    valueCS: 0,
    category: "",
  });

  function showModal() {
    setIsModalActive(true);
  }

  function handleDelete(id) {
    confirmAlert({
      title: "Eliminar",
      message: "¿Desea eliminar este gasto programado?",
      buttons: [
        {
          label: "Sí",
          onClick: () => {
            removeExpectedExpense({
              expectedExpenseId: id,
              budgetId: budget.id,
              period: period.description,
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
    <div className="box">
      <div className="block">
        <div className="level">
          <div className="level-left">
            <h1 className="title is-size-5">Gastos programados</h1>
          </div>
          <div className="level-right">
            <button
              className="button is-link"
              onClick={() => {
                setCurrentExpense({
                  bankId: "",
                  description: "",
                  valueUSD: 0,
                  valueCS: 0,
                });
                showModal();
              }}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>

      <table className="table is-fullwidth is-narrow">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th className="has-text-right">U$</th>
            <th className="has-text-right">C$</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {period.expectedExpenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td className="has-text-left">
                  <button
                    className="button is-ghost"
                    onClick={() => {
                      setCurrentExpense(expense);
                      showModal();
                    }}
                  >
                    {expense.description}
                  </button>
                </td>
                <td className="has-text-right">
                  {expense.valueUSD.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="has-text-right">
                  {expense.valueCS.toLocaleString("es-NI", {
                    style: "currency",
                    currency: "NIO",
                  })}
                </td>
                <td>
                  <span className="icon">
                    <button
                      onClick={() => handleDelete(expense.id)}
                      className="button is-danger is-small is-outlined"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ExpectedExpense
        key={currentExpense.id}
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        period={period}
        budget={budget}
        setBudget={setBudget}
        expectedExpense={currentExpense}
        setExpectedExpense={setCurrentExpense}
      />
    </div>
  );
};

export default ExpensesList;
