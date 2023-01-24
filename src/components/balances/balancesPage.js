import BalancesByCategory from "./balancesByCategory";
import BalancesByCategoryAdnCreditCard from "./balancesByCategoryAndCreditCard";

const BalancesPage = () => {
  const balancesByCategory = [
    {
      description: "Supermercado",
      amountCS: 18380.59,
      amountUSD: 236.58,
      paidCS: 0,
      balance: 18380.59,
    },

    {
      description: "ComidaFueraCasa",
      amountCS: 14971.6,
      amountUSD: 418.2,
      paidCS: 0,
      balance: 14971.6,
    },

    {
      description: "Varios",
      amountCS: 11662.11,
      amountUSD: 325.76,
      paidCS: 0,
      balance: 116662.11,
    },
    {
      description: "NoPresupuestado",
      amountCS: 48526.71,
      amountUSD: 1355.49,
      paidCS: 0,
      balance: 48526.71,
    },
  ];

  const balancesByCategoryAndCreditCard = [
    {
      description: "Varios Amex",
      amountCS: 9382.45,
      amountUSD: 267.67,
      paidCS: 7566.18,
      balance: 1816.27,
    },
    {
      description: "Varios La Colonia",
      amountCS: 2279.66,
      amountUSD: 63.82,
      paidCS: 2279.66,
      balance: 0,
    },
    {
      description: "Supermercado Amex",
      amountCS: 7008.01,
      amountUSD: 196.19,
      paidCS: 7008.0,
      balance: 0.01,
    },
    {
      description: "Supermercado La Colonia",
      amountCS: 8359.58,
      amountUSD: 234.03,
      paidCS: 8359.58,
      balance: 0,
    },
  ];

  return (
    <>
      <BalancesByCategory
        title={"Balance por categoria"}
        items={balancesByCategory}
      />
      <BalancesByCategory
        title={"Balance por categoria y banco"}
        items={balancesByCategoryAndCreditCard}
      />
    </>
  );
};

export default BalancesPage;
