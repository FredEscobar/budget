import React from "react";

const IncomeData = (props) => {
  return (
    <div className="is-flex is-align-content-start">
      <b className="mx-2">{props.label}</b>
      <p className="mx-2">{props.value}</p>
    </div>
  );
};

export default IncomeData;
