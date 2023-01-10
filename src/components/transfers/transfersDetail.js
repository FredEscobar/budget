import React from "react";

const TransferDetail = ({ bankName, amount }) => {
  return (
    <div className="columns">
      <div className="column has-text-left  has-text-weight-bold p-1">
        {bankName}
      </div>
      <div className="column has-text-right p-1">
        {amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
};

export default TransferDetail;
