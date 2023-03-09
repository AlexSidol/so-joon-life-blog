import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const Article = ({ children, className }) => {
  return (
    <article className={cl(className, styles.article)}>{children}</article>
  );
};

export default Article;
