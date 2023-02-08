import BalancesByCategory from "./balancesByCategory";
import BalancesByCategoryAndCreditCard from "./balancesByCategoryAndCreditCard";

const BalancesPage = ({
  balancesByCategory,
  balancesByCategoryAndCreditCard,
}) => {
  return (
    <>
      <BalancesByCategory
        title={"Balance por categoria"}
        items={balancesByCategory}
      />
      <BalancesByCategoryAndCreditCard
        title={"Balance por categoria y banco"}
        items={balancesByCategoryAndCreditCard}
      />
    </>
  );
};

export default BalancesPage;
