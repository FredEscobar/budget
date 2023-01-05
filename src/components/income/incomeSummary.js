import React from "react";
import IncomeData from "./incomeData";

const IncomeSummary = () => {
  return (
    <>
      <IncomeData label={"Salario"} value={"2,350.00"} />
      <IncomeData label={"IR"} value={"235.00"} />
      <IncomeData label={"Disponible"} value={"2,115.00"} />
      <IncomeData label={"Gastos"} value={"1,943.87"} />
      <IncomeData label={"Balance"} value={"171.13"} />
    </>
  );
};

export default IncomeSummary;
