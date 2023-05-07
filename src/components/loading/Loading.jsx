import React from "react";
import styles from "../../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["three-body"]}>
      <div className={styles["three-body__dot"]}></div>
      <div className={styles["three-body__dot"]}></div>
      <div className={styles["three-body__dot"]}></div>
    </div>
  );
};

export default Loading;
