import React, { useState, useEffect } from "react";
import { getBudgets } from "../../api/budgetApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const BudgetList = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    getBudgets().then((response) => setBudgets(response));
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Mes</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>
        {budgets.map((budget) => {
          return (
            <tr key={budget.id}>
              <td>
                <span className="icon">
                  <a
                    href={"/budget/" + budget.id}
                    className="button is-link is-small is-outlined"
                  >
                    <FontAwesomeIcon icon={faEye} size="2x" />
                  </a>
                </span>
              </td>
              <td>{budget.month}</td>
              <td>{budget.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BudgetList;
