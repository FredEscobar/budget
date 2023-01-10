import React from "react";

const ExpensesList = ({ expenses }) => {
  return (
    <div className="box">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Descripcion</th>
            <th className="has-text-right">U$</th>
            <th className="has-text-right">C$</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.description}>
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
    </div>
  );
};

export default ExpensesList;
