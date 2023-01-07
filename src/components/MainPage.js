import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BudgetList from "./budgets/budgetList";
import BudgetPage from "./budgets/budgetPage";

const MainPage = (props) => {
  return (
    <div className="container m-4">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BudgetList />} />
          <Route path="/budget/:id" element={<BudgetPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainPage;
