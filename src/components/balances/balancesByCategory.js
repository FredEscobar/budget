import React from "react";
import { incurredExpenseCategories as categories } from "../../data/common";

const BalancesByCategory = ({ title, items }) => {
  return (
    <div className="panel">
      <div className="panel-heading">{title}</div>
      <div className="panel-block">
        <table className="table is-fullwidth is-narrow">
          <thead>
            <tr>
              <th className="has-text-left">Categoria</th>
              <th className="has-text-right">C$</th>
              <th className="has-text-right">US$</th>
              <th className="has-text-right">Presup. C$</th>
              <th className="has-text-right">Presup.US$</th>
              <th className="has-text-right">Disp. C$</th>
              <th className="has-text-right">Disp. US$</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((balanceItem) => (
                <tr key={balanceItem.categoryId}>
                  <td className="has-text-left">
                    {
                      categories.find((c) => c.value === balanceItem.categoryId)
                        .text
                    }
                  </td>
                  <td className="has-text-right">
                    {balanceItem.amountCS?.toLocaleString("es-NI", {
                      style: "currency",
                      currency: "NIO",
                    })}
                  </td>
                  <td className="has-text-right">
                    {balanceItem.amountUSD?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="has-text-right">
                    {balanceItem.availableCS?.toLocaleString("es-NI", {
                      style: "currency",
                      currency: "NIO",
                    })}
                  </td>
                  <td className="has-text-right">
                    {balanceItem.availableUSD?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="has-text-right">
                    {balanceItem.balanceCS?.toLocaleString("es-NI", {
                      style: "currency",
                      currency: "NIO",
                    })}
                  </td>
                  <td className="has-text-right">
                    {balanceItem.balanceUSD?.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BalancesByCategory;
