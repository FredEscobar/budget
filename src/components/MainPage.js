import React from "react";
import IncomeSummary from "./income/incomeSummary";
import ExpensesList from "./expenses/expensesList";

const MainPage = (props) => {
  return (
    <div className="container m-4">
      <h1 className="is-size-5 has-text-weight-medium">Primera quincena</h1>
      <IncomeSummary />
      <ExpensesList />
    </div>
  );
};

export default MainPage;
