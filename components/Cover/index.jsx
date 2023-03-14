import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";

const Cover = ({ className, title }) => {
  return (
    <div className={cl(className, styles.cover)}>
      <h1
        className={styles.coverTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default Cover;
