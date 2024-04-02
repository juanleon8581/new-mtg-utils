import "./BuyMeACoffe.css";

interface BuyMeACoffeProps {
  onlyButton?: boolean;
}

const BuyButton = () => {
  return (
    <a
      className="buyButton"
      target="_blank"
      href="https://www.buymeacoffee.com/juanleon"
    >
      <span className="coffeeButtonText">☕ Buy me a coffee</span>
    </a>
  );
};

export const BuyMeACoffe = ({ onlyButton = false }) => {
  return (
    <>
      {onlyButton ? (
        <BuyButton />
      ) : (
        <div className="bmacContainer">
          <p>
            This is a personal project, if you like it and want to support it,
            you can...
          </p>
          <BuyButton />
        </div>
      )}
    </>
  );
};
