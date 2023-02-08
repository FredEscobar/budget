import { useState } from "react";
import { cloneBudget, getBudgets } from "../../api/budgetApi";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const CloneBudget = ({ isActive, setIsActive, budgetId, setBudgets }) => {
  const [errors, setErrors] = useState({});
  const [budgetInfo, setNewBudgetInfo] = useState({
    month: "",
    year: "",
  });
  function handleCancel() {
    setIsActive(false);
  }

  function onChange({ target }) {
    setNewBudgetInfo((prev) => {
      return {
        ...prev,
        [target.name]: +target.value,
      };
    });
  }

  function handleSave() {
    if (!formIsValid()) return;

    cloneBudget({
      budgetId,
      month: budgetInfo.month,
      year: budgetInfo.year,
    }).then((statusCode) => {
      if (statusCode === 200) {
        getBudgets().then((response) =>
          setBudgets(response.map((b) => unmarshall(b)))
        );
      }
    });

    setIsActive(false);
  }

  function formIsValid() {
    const { month, year } = budgetInfo;
    const errors = {};

    if (!month) errors.description = "Mes es requerido";
    if (!year) errors.valueUSD = "Año es requerido.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  return (
    <div
      id="clone-budget-modal"
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
            <label className="label has-text-left">Mes</label>
            <div className="control">
              <input
                id="month"
                name="month"
                className="input"
                type="text"
                placeholder=""
                onChange={onChange}
                value={budgetInfo.month}
              />
              {errors.month && (
                <div className="has-text-left has-text-danger">
                  {errors.month}
                </div>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Monto USD</label>
            <div className="control">
              <input
                id="year"
                name="year"
                className="input"
                type="number"
                placeholder=""
                onChange={onChange}
                value={budgetInfo.year}
              />
              {errors.year && (
                <div className="has-text-left has-text-danger">
                  {errors.year}
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

export default CloneBudget;
