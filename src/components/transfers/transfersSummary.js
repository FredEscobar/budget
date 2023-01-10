import React from "react";
import TransferDetail from "./transfersDetail";

const TransfersSummary = ({ data }) => {
  return (
    <div>
      <h1 className="subtitle is-underlined">Transferencias</h1>
      {data.detail.map((d) => {
        return (
          <TransferDetail
            key={d.bankName}
            bankName={d.bankName}
            amount={d.amount}
          />
        );
      })}
      <TransferDetail key={"total"} bankName={"Total"} amount={data.total} />
    </div>
  );
};

export default TransfersSummary;
