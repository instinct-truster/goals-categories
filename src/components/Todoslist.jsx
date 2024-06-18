import styles from "./Todoslist.module.css";
import Card from "./Card";

function Todoslist() {
  return (
    <div className={styles.todolist}>
      {[0, 1, 2, 3].map((item) => (
        <Card />
      ))}
    </div>
  );
}

export default Todoslist;
