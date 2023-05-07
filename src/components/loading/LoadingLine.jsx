import React from "react";
import styles from "../../styles/Loading.module.css";

const LoadingLine = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </article>
  );
};

export default LoadingLine;
