import React from "react";
import TransferDetail from "./transfersDetail";
import { banks } from "../../data/common";

const TransfersSummary = ({ data }) => {
  return (
    <div>
      <h1 className="subtitle is-underlined">Transferencias</h1>
      {data &&
        data.detail &&
        data.detail.length &&
        data.detail.map((d) => {
          return (
            <TransferDetail
              key={d.bankId}
              bankName={banks.find((bank) => bank.id === d.bankId)?.name}
              amount={d.amount}
            />
          );
        })}
      <TransferDetail key={"total"} bankName={"Total"} amount={data.total} />
    </div>
  );
};

export default TransfersSummary;
