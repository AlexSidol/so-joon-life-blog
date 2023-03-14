import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const ScreenEgg = ({ className, type, children }) => {
  return (
    <div
      className={cl(
        className,
        styles.screenEgg,
        type === "right" ? styles.screenEggRight : styles.screenEggLeft
      )}
    >
      {children}
    </div>
  );
};

export default ScreenEgg;
