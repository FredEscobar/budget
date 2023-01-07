import React from "react";
import IncomeData from "./incomeData";

const IncomeSummary = ({ data }) => {
  return (
    <>
      <IncomeData label={"Salario"} value={data.salary} />
      <IncomeData label={"IR"} value={data.ir} />
      <IncomeData label={"Disponible"} value={data.available} />
      <IncomeData label={"Gastos"} value={data.expenses} />
      <IncomeData label={"Balance"} value={data.balance} />
    </>
  );
};

export default IncomeSummary;
