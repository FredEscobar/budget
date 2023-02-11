import React, { useState } from "react";
import { addIncurredExpense, getBudgetById } from "../../api/budgetApi";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";

const IncurredExpense = ({
  isActive,
  setIsActive,
  budget,
  setBudget,
  ocurredExpense,
  setOcurredExpense,
  categories,
  creditCards,
  amountCS,
  setAmountCS,
  amountUSD,
  setAmountUSD,
  exchangeRate,
}) => {
  const [errors, setErrors] = useState({});

  function handleChange({ target }) {
    switch (target.name) {
      case "amountCS":
        setAmountCS(target.value);
        setAmountUSD(Math.round((target.value / exchangeRate) * 100) / 100);
        break;
      case "amountUSD":
        setAmountUSD(target.value);
        setAmountCS(Math.round(target.value * exchangeRate * 100) / 100);
        break;
      default:
        setOcurredExpense({
          ...ocurredExpense,
          [target.name]:
            target.name === "isUSD" ? target.checked : target.value,
        });
        break;
    }
  }

  function handleCancel() {
    setIsActive(false);
  }

  function handleSave() {
    if (!isFormValid()) return;

    addIncurredExpense({
      incurredExpense: {
        ...ocurredExpense,
        amountCS: +amountCS,
        amountUSD: +amountUSD,
        id: uuidv4(),
      },
      budgetId: budget.id,
    }).then((statusCode) => {
      if (statusCode === 200) {
        getBudgetById(budget.id).then((response) =>
          setBudget(unmarshall(response[0]))
        );
      }
    });

    setIsActive(false);
  }

  function isFormValid() {
    const { description, category, creditCard } = ocurredExpense;
    const errors = {};
    if (!description) errors.description = "Descripción es requerida.";
    if (!category) errors.category = "Categoria es requerida.";
    if (!creditCard) errors.creditCard = "Tarjeta es requerida.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  return (
    <div className={"modal" + (isActive ? " is-active" : "")}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Gasto incurrido</p>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label has-text-left">Descripcion</label>
            <div className="control">
              <input
                id="description"
                name="description"
                className="input"
                type="text"
                onChange={handleChange}
                value={ocurredExpense.description}
              ></input>
              {errors.description && (
                <div className="has-text-left has-text-danger">
                  {errors.description}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Categoria</label>
            <div className="control">
              <div className="select" style={{ width: "100%" }}>
                <select
                  name="category"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  value={ocurredExpense.category}
                >
                  <option className="has-text-grey-light" value="">
                    Seleccionar categoria
                  </option>
                  {categories.map((category) => {
                    return (
                      <option key={category.value} value={category.value}>
                        {category.text}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errors.category && (
                <div className="has-text-left has-text-danger">
                  {errors.category}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Tarjeta</label>
            <div className="control">
              <div className="select" style={{ width: "100%" }}>
                <select
                  name="creditCard"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  value={ocurredExpense.creditCard}
                >
                  <option className="has-text-grey-light" value="">
                    Seleccionar tarjeta
                  </option>
                  {creditCards.map((card) => {
                    return (
                      <option key={card.id} value={card.id}>
                        {card.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errors.creditCard && (
                <div className="has-text-left has-text-danger">
                  {errors.creditCard}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Monto CS</label>
            <div className="control">
              <input
                id="amountCS"
                name="amountCS"
                className="input"
                type="text"
                placeholder=""
                value={amountCS}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Monto USD</label>
            <div className="control">
              <input
                id="amountUSD"
                name="amountUSD"
                className="input"
                type="text"
                placeholder=""
                value={amountUSD}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox is-flex">
                <input
                  type="checkbox"
                  id="isUSD"
                  name="isUSD"
                  checked={ocurredExpense.isUSD}
                  value={ocurredExpense.isUSD}
                  onChange={handleChange}
                />
                &nbsp; Es dolares
              </label>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSave}>
            Guardar
          </button>
          <button className="button" onClick={handleCancel}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default IncurredExpense;
