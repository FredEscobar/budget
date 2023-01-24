import React from "react";

const BalancesByCategory = ({ title, items }) => {
  return (
    <div className="panel">
      <div className="panel-heading">{title}</div>
      <div className="panel-block">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th className="has-text-left">Categoria</th>
              <th className="has-text-right">US$</th>
              <th className="has-text-right">C$</th>
              <th className="has-text-right">Pagado</th>
              <th className="has-text-right">Balance</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.map((i) => (
                <tr key={i.description}>
                  <td className="has-text-left">{i.description}</td>
                  <td className="has-text-right">
                    {i.amountCS.toLocaleString("es-NI", {
                      style: "currency",
                      currency: "NIO",
                    })}
                  </td>
                  <td className="has-text-right">
                    {i.amountUSD.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="has-text-right">
                    {i.paidCS.toLocaleString("es-NI", {
                      style: "currency",
                      currency: "NIO",
                    })}
                  </td>
                  <td className="has-text-right">
                    {i.balance.toLocaleString("en-US", {
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
