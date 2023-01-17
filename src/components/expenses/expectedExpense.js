import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as budgetApi from "../../api/budgetApi";

const ExpectedExpense = ({
  isActive,
  setIsActive,
  period,
  budget,
  setBudget,
}) => {
  const [expectedExpense, setExpectedExpense] = useState({
    id: uuidv4(),
    description: "",
    valueUSD: 0,
    valueCS: 0,
  });

  const [errors, setErrors] = useState({});

  function handleCancel() {
    setIsActive(false);
  }

  function handleSave() {
    if (!formIsValid()) return;
    const newPeriods = budget.periods.map((p) =>
      p.description !== period.description
        ? p
        : {
            ...p,
            expectedExpenses: [...p.expectedExpenses, expectedExpense],
          }
    );

    const updatedBudget = {
      ...budget,
      periods: newPeriods,
    };

    budgetApi.saveBudget(updatedBudget).then((b) => setBudget(b));
    handleCancel();
  }

  function formIsValid() {
    const { description, valueUSD } = expectedExpense;
    const errors = {};

    if (!description) errors.description = "Descripción es requerida.";
    if (!valueUSD) errors.valueUSD = "Valor es requerido.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function onChange({ target }) {
    setExpectedExpense({
      ...expectedExpense,
      [target.name]: target.name === "valueUSD" ? +target.value : target.value,
    });
  }

  return (
    <div
      id="expected-expense-modal"
      className={"modal" + (isActive ? " is-active" : "")}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
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
              />
              {errors.description && (
                <div className="has-text-left has-text-danger">
                  {errors.description}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Valor USD</label>
            <div className="control">
              <input
                id="valueUSD"
                name="valueUSD"
                className="input"
                type="number"
                placeholder=""
                onChange={onChange}
              />
              {errors.valueUSD && (
                <div className="has-text-left has-text-danger">
                  {errors.valueUSD}
                </div>
              )}
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSave}>
            Save changes
          </button>
          <button className="button" onClick={handleCancel}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ExpectedExpense;
