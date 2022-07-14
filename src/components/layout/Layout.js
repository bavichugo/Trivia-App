import { Fragment } from "react";
import Trivia from "../trivia/Trivia";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles["layout-container"]}>
      <Trivia />
    </div>
  );
};

export default Layout;
