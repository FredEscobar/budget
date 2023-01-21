import React, { useState } from "react";
import OcurredExpense from "./ocurredExpense";

const OcurredExpensesList = ({ budget }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentOcurredExpense, setCurrentOcurredExpense] = useState({});
  function showModal() {
    setIsModalActive(true);
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
              </tr>
            </thead>
            <tfoot>
              <th></th>
              <th></th>
              <th></th>
              <th className="has-text-right">
                {budget.incurredExpenses.totalCS.toLocaleString("es-NI", {
                  style: "currency",
                  currency: "NIO",
                })}
              </th>
              <th className="has-text-right">
                {budget.incurredExpenses.totalUSD.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </th>
            </tfoot>
            <tbody>
              {budget.incurredExpenses &&
                budget.incurredExpenses.items &&
                budget.incurredExpenses.items.map((incurredExpense) => (
                  <tr>
                    <td className="has-text-left">
                      <button className="button is-ghost">
                        {incurredExpense.description}
                      </button>
                    </td>
                    <td>{incurredExpense.category}</td>
                    <td>{incurredExpense.creditCard}</td>
                    <td className="has-text-right">
                      {incurredExpense.valueCS.toLocaleString("es-NI", {
                        style: "currency",
                        currency: "NIO",
                      })}
                    </td>
                    <td className="has-text-right">
                      {incurredExpense.valueCS.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <OcurredExpense
        isActive={isModalActive}
        ocurredExpense={currentOcurredExpense}
        setOcurredExpense={setCurrentOcurredExpense}
      />
    </>
  );
};

export default OcurredExpensesList;
