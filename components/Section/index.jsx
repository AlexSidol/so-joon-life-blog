import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const Section = ({ children, className }) => {
  return (
    <section className={cl(className, styles.section)}>{children}</section>
  );
};

export default Section;
