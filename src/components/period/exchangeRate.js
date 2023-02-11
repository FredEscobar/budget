import { unmarshall } from "@aws-sdk/util-dynamodb";
import { useState } from "react";
import { getBudgetById, updatePeriodExchangeRate } from "../../api/budgetApi";

const ExchangeRate = ({
  isActive,
  setIsActive,
  budgetId,
  period,
  setBudget,
  exchangeRate,
  setExchangeRate,
}) => {
  const [error, setError] = useState("");

  function onChange({ target }) {
    setExchangeRate(target.value);
  }

  function handleSave() {
    if (!+exchangeRate) {
      setError("Tasa de cambio es requerida");
      return;
    }

    updatePeriodExchangeRate({
      budgetId: budgetId,
      period: period,
      exchangeRate: +exchangeRate,
    }).then((statusCode) => {
      if (statusCode === 200) {
        getBudgetById(budgetId).then((response) =>
          setBudget(unmarshall(response[0]))
        );
        setIsActive(false);
      }
    });
  }

  function handleCancel() {
    setIsActive(false);
  }

  return (
    <div
      id="echange-rate-modal"
      className={"modal" + (isActive ? " is-active" : "")}
    >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Tasa cambio</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label has-text-left">Tasa de cambio</label>
            <div className="control">
              <input
                id="exchangeRate"
                name="exchangeRate"
                className="input"
                type="text"
                placeholder=""
                onChange={onChange}
                autoFocus
                value={exchangeRate}
              />
              {error && (
                <div className="has-text-left has-text-danger">{error}</div>
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

export default ExchangeRate;
