import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import ScreenEgg from "../ScreenEgg";

const BuyMeCoffee = ({ className }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <a
          href="https://www.monobank.ua/?lang=uk"
          className={styles.buyCoffeeButton}
          target="_blank"
          rel="noreferrer"
        >
          Buy me Felix, please...
        </a>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
