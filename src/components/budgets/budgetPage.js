import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBudgetById } from "../../api/budgetApi";
import { useParams } from "react-router-dom";
import Period from "../period/period";
import IncurredExpensesList from "../incurredExpenses/incurredExpensesList";
import BalancesPage from "../balances/balancesPage";
import { unmarshall } from "@aws-sdk/util-dynamodb";

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
    incurredExpenses: {
      totalUSD: 0,
      totalCS: 0,
      items: [],
    },
    balancesByCategory: [],
    balancesByCategoryAndCreditCard: [],
  });

  const [tabCssClass, setTabCssClass] = useState({
    expectedExpensesTab: "is-active",
    expectedExpensesContent: "",
    incurredExpensesTab: "",
    incurredExpensesContent: "is-hidden",
    balancesTab: "",
    balancesContent: "is-hidden",
  });

  let params = useParams();

  useEffect(() => {
    getBudgetById(params.id).then((response) =>
      setBudget(unmarshall(response[0]))
    );
  }, [params]);

  function handleTabSwtich(index) {
    switch (index) {
      case 0:
        setTabCssClass((tcc) => {
          return {
            expectedExpensesTab: "is-active",
            incurredExpensesContent: "is-hidden",
            expectedExpensesContent: "",
            incurredExpensesTab: "",
            balancesTab: "",
            balancesContent: "is-hidden",
          };
        });
        break;
      case 1:
        setTabCssClass((tcc) => {
          return {
            incurredExpensesTab: "is-active",
            expectedExpensesContent: "is-hidden",
            expectedExpensesTab: "",
            incurredExpensesContent: "",
            balancesTab: "",
            balancesContent: "is-hidden",
          };
        });
        break;
      case 2:
        setTabCssClass((tcc) => {
          return {
            incurredExpensesTab: "",
            expectedExpensesContent: "is-hidden",
            expectedExpensesTab: "",
            incurredExpensesContent: "is-hidden",
            balancesTab: "is-active",
            balancesContent: "",
          };
        });
        break;
      default:
        return;
    }
  }

  return (
    <div className="container m-4">
      <nav className="level">
        <div className="level-left" />
        <div className="level-right">
          <div className="level-item">
            <Link to="/">Regresar</Link>
          </div>
        </div>
      </nav>

      <div className="tabs">
        <ul>
          <li
            className={tabCssClass.expectedExpensesTab}
            onClick={() => handleTabSwtich(0)}
          >
            <a>Gastos presupuestados</a>
          </li>
          <li
            className={tabCssClass.incurredExpensesTab}
            onClick={() => handleTabSwtich(1)}
          >
            <a>Gastos incurridos</a>
          </li>
          <li
            className={tabCssClass.balancesTab}
            onClick={() => handleTabSwtich(2)}
          >
            <a>Balances</a>
          </li>
        </ul>
      </div>
      <div className={tabCssClass.expectedExpensesContent}>
        {budget.periods.map((p) => {
          return (
            <Period
              key={p.description}
              period={p}
              budget={budget}
              setBudget={setBudget}
            />
          );
        })}
      </div>
      <div className={tabCssClass.incurredExpensesContent}>
        <IncurredExpensesList budget={budget} setBudget={setBudget} />
      </div>
      <div className={tabCssClass.balancesContent}>
        <BalancesPage
          balancesByCategory={budget.balancesByCategory}
          balancesByCategoryAndCreditCard={
            budget.balancesByCategoryAndCreditCard
          }
        />
      </div>
    </div>
  );
};

export default BudgetPage;
