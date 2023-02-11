import { useState } from "react";
import * as budgetApi from "../../api/budgetApi";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";
import {
  banks,
  incurredExpenseCategories as categories,
} from "../../data/common";

const ExpectedExpense = ({
  isActive,
  setIsActive,
  period,
  budget,
  setBudget,
  expectedExpense,
  setExpectedExpense,
}) => {
  const [errors, setErrors] = useState({});
  const [amountUSDString, setAmountUSDString] = useState(
    expectedExpense.valueUSD
  );

  function handleCancel() {
    setIsActive(false);
  }

  function handleSave() {
    if (!formIsValid()) return;

    budgetApi
      .addExpectedExpense({
        expectedExpense: expectedExpense.id
          ? { ...expectedExpense, valueUSD: +amountUSDString }
          : { ...expectedExpense, valueUSD: +amountUSDString, id: uuidv4() },
        budgetId: budget.id,
        period: period.description,
      })
      .then((statusCode) => {
        if (statusCode === 200) {
          budgetApi
            .getBudgetById(budget.id)
            .then((response) => setBudget(unmarshall(response[0])));
        }
      });

    handleCancel();
  }

  function formIsValid() {
    const { description, valueUSD, bankId } = expectedExpense;
    const errors = {};

    if (!description) errors.description = "Descripción es requerida.";
    if (!valueUSD) errors.valueUSD = "Valor es requerido.";
    if (!bankId) errors.bankId = "Banco es requerido";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function onChange({ target }) {
    if (target.name === "valueUSD") {
      setAmountUSDString(target.value);
    } else {
      setExpectedExpense({
        ...expectedExpense,
        [target.name]: target.value,
      });
    }
  }

  return (
    <div
      id="expected-expense-modal"
      className={"modal" + (isActive ? " is-active" : "")}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Gasto programado</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label has-text-left">Nombre del gasto</label>
            <div className="control">
              <input
                id="description"
                name="description"
                className="input"
                type="text"
                placeholder=""
                onChange={onChange}
                autoFocus
                value={expectedExpense.description}
              />
              {errors.description && (
                <div className="has-text-left has-text-danger">
                  {errors.description}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Monto USD</label>
            <div className="control">
              <input
                id="valueUSD"
                name="valueUSD"
                className="input"
                type="text"
                placeholder=""
                onChange={onChange}
                value={amountUSDString}
              />
              {errors.valueUSD && (
                <div className="has-text-left has-text-danger">
                  {errors.valueUSD}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Banco</label>
            <div className="control">
              <div className="select" style={{ width: "100%" }}>
                <select
                  name="bankId"
                  style={{ width: "100%" }}
                  onChange={onChange}
                  value={expectedExpense.bankId}
                >
                  <option className="has-text-grey-light" value="">
                    Seleccionar banco
                  </option>
                  {banks.map((bank) => {
                    return (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errors.bankId && (
                <div className="has-text-left has-text-danger">
                  {errors.bankId}
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
                  onChange={onChange}
                  value={expectedExpense.category}
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

export default ExpectedExpense;
