import Card from "../UI/Card";
import styles from "./Trivia.module.css";

const Trivia = () => {
    return <Card className={styles["trivia-container"]}>
        <div>Question 1 of 5</div>
        <img />
        <span>Topic: General Knowledge</span>
        <ul>
            {}
        </ul>
    </Card>
}

export default Trivia;