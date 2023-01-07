import React, { useState, useEffect } from "react";
import IncomeSummary from "../income/incomeSummary";
import ExpensesList from "../expenses/expensesList";
import { getBudgetById } from "../../api/budgetApi";
import { useParams } from "react-router-dom";

const BudgetPage = (props) => {
  const [budget, setBudget] = useState({
    periods: [
      {
        incomeSummary: {
          salary: 0,
          ir: 0,
          available: 0,
          expenses: 0,
          balance: 0,
        },
      },
    ],
  });

  let params = useParams();

  useEffect(() => {
    getBudgetById(params.id).then((response) => setBudget(response));
  }, [params]);

  return (
    <div className="container m-4">
      <h1 className="is-size-5 has-text-weight-medium">Primera quincena</h1>
      <IncomeSummary data={budget.periods[0].incomeSummary} />
      <ExpensesList />
    </div>
  );
};

export default BudgetPage;
