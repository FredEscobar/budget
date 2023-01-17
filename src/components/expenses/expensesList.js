import React, { useState } from "react";
import ExpectedExpense from "./expectedExpense";

const ExpensesList = ({ period, budget, setBudget }) => {
  const [isModalActive, setIsModalActive] = useState(false);

  function showModal() {
    setIsModalActive(true);
  }

  return (
    <div className="box">
      <div className="block">
        <div className="level">
          <div className="level-left">
            <h1 className="title is-size-5">Gastos programados</h1>
          </div>
          <div className="level-right">
            <button className="button is-link" onClick={showModal}>
              Agregar
            </button>
          </div>
        </div>
      </div>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th className="has-text-right">U$</th>
            <th className="has-text-right">C$</th>
          </tr>
        </thead>
        <tbody>
          {period.expectedExpenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td className="has-text-left">{expense.description}</td>
                <td className="has-text-right">
                  {expense.valueUSD.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="has-text-right">
                  {expense.valueCS.toLocaleString("en-NI", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ExpectedExpense
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        period={period}
        budget={budget}
        setBudget={setBudget}
      />
    </div>
  );
};

export default ExpensesList;
