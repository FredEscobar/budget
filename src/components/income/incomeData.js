import React from "react";

const IncomeData = (props) => {
  return (
    <div className="columns">
      <div className="column is-2 has-text-left  has-text-weight-bold p-1">
        {props.label}
      </div>
      <div className="column is-3 has-text-right p-1">
        {props.value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </div>
  );
};

export default IncomeData;
