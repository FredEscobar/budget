import React, { useState } from "react";
import TransfersSummary from "../transfers/transfersSummary";
import IncomeSummary from "../income/incomeSummary";
import ExpensesList from "../expenses/expensesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import ExchangeRate from "./exchangeRate";

const Period = ({ period, budget, setBudget }) => {
  const [isExchangeRateModalActive, setIsExchangeRateModalActive] =
    useState(false);
  const [modalExchangeRate, setModalExchangeRate] = useState("0");

  function handleUpdateExchangeRate() {
    setModalExchangeRate(period.exchangeRate);
    setIsExchangeRateModalActive(true);
  }

  return (
    <>
      <div className="panel is-info is-light">
        <div className="panel-heading">{period.description}</div>
        <div className="panel-block">
          <div className="control m-5">
            <div className="columns">
              <div className="column">
                <IncomeSummary data={period.incomeSummary} />
              </div>
              <div className="column">
                <div className="box">
                  <div className="columns">
                    <div className="column has-text-left  has-text-weight-bold p-1">
                      Tasa Cambio
                    </div>
                    <div className="column has-text-right p-1">
                      {period.exchangeRate.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </div>
                    <span className="p-1">
                      <a
                        title="Ver detalle"
                        className="button is-link is-small is-outlined"
                        onClick={handleUpdateExchangeRate}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </a>
                    </span>
                  </div>
                  <TransfersSummary data={period.bankTransfer} />
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <ExpensesList
                  period={period}
                  budget={budget}
                  setBudget={setBudget}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExchangeRate
        isActive={isExchangeRateModalActive}
        setIsActive={setIsExchangeRateModalActive}
        budgetId={budget.id}
        period={period.description}
        setBudget={setBudget}
        exchangeRate={modalExchangeRate}
        setExchangeRate={setModalExchangeRate}
      />
    </>
  );
};

export default Period;
