import React from "react";
import IncomeData from "./incomeData";

const IncomeSummary = ({ data }) => {
  return (
    <div className="box" style={{ height: "100%" }}>
      <IncomeData label={"Salario"} value={data.salary} />
      <IncomeData label={"IR"} value={data.ir} />
      <IncomeData label={"Gym"} value={data.gym ?? 0} />
      <IncomeData label={"Disponible"} value={data.available} />
      <IncomeData label={"Gastos"} value={data.expenses} />
      <IncomeData label={"Balance"} value={data.balance} />
    </div>
  );
};

export default IncomeSummary;
