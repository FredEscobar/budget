import React, { useState, useEffect } from "react";
import { getBudgetById } from "../../api/budgetApi";
import { useParams } from "react-router-dom";
import Period from "../period/period";

const BudgetPage = (props) => {
  const [budget, setBudget] = useState({
    periods: [
      {
        exchangeRate: 0,
        description: "",
        bankTransfer: {
          total: 0,
          detail: [],
        },
        incomeSummary: {
          salary: 0,
          ir: 0,
          available: 0,
          expenses: 0,
          balance: 0,
        },
        expectedExpenses: [],
      },
    ],
  });

  let params = useParams();

  useEffect(() => {
    getBudgetById(params.id).then((response) => setBudget(response));
  }, [params]);

  return (
    <div className="container m-4">
      {budget.periods.map((p) => {
        return <Period key={p.description} period={p} />;
      })}
    </div>
  );
};

export default BudgetPage;
