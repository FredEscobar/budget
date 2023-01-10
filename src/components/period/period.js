import React from "react";
import TransfersSummary from "../transfers/transfersSummary";
import IncomeSummary from "../income/incomeSummary";
import ExpensesList from "../expenses/expensesList";

const Period = ({ period }) => {
  return (
    <div className="panel">
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
                </div>
                <TransfersSummary data={period.bankTransfer} />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <ExpensesList expenses={period.expectedExpenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Period;
