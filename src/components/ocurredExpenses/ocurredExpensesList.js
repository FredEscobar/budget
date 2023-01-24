import React, { useState } from "react";
import OcurredExpense from "./ocurredExpense";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { confirmAlert } from "react-confirm-alert"; // Import
import { saveBudget } from "../../api/budgetApi";

const OcurredExpensesList = ({ budget, setBudget }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentOcurredExpense, setCurrentOcurredExpense] = useState({
    amountCS: 0,
    amountUSD: 0,
  });

  const categories = [
    { value: "c4683940-c7d2-4136-9ced-fa9e0fcaef9e", text: "Supermercado" },
    { value: "4b2c0be4-c47a-4fad-a090-1a9bf5493f3d", text: "Comida Delivery" },
    {
      value: "d20dd4d7-8051-4287-b88d-caf79bed82f3",
      text: "Comida Fuera de Casa",
    },
    {
      value: "c889f9ae-268c-4667-aca5-999a68f4b22e",
      text: "Personales varios",
    },
    { value: "08cdca16-67a2-456f-8c89-18e8844b3c47", text: "No presupuestado" },
    { value: "c7b2937c-8fec-4aeb-b109-8dc24217542b", text: "Servicio Basico" },
  ];

  const creditCards = [
    { id: "e0eca7da-ac01-449b-8d6e-99ebd33037a1", name: "American Express" },
    { id: "6f48f233-c08e-4e22-984e-976162beac4a", name: "La Colonia" },
    { id: "44553317-68ca-4b9c-9382-c5e0bdc27f94", name: "Walmart" },
  ];

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
            const newIncurredExpenses = budget.incurredExpenses.items.filter(
              (ie) => ie.id !== id
            );

            const updatedBudget = {
              ...budget,
              incurredExpenses: {
                ...budget.incurredExpenses,
                items: newIncurredExpenses,
              },
            };

            saveBudget(updatedBudget).then((b) => setBudget(b));
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
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              {budget.incurredExpenses &&
                budget.incurredExpenses.items &&
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

export default OcurredExpensesList;
