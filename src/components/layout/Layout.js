import Trivia from "../trivia/Trivia";
import CategoryForm from "../category-form/CategoryForm";
import styles from "./Layout.module.css";


const Layout = () => {
  return (
    <div className={styles["layout-container"]}>
      <CategoryForm />
    </div>
  );
};

export default Layout;
