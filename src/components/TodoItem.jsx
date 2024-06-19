import styles from "./TodoItem.module.css";
import Checkbox from "./Checkbox";
import Typography from "./Typography";
import ActionButton from "./ActionButton";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";

function TodoItem() {
  return (
    <>
      <div className={styles.taskName}>
        <Checkbox />
        <Typography fontSize={24}>Do the dishes</Typography>
      </div>
      <div className={styles.actionButton}>
        <ActionButton icon={edit} handleClick={() => null} />
        <ActionButton icon={trash} handleClick={() => null} />
      </div>
    </>
  );
}

export default TodoItem;
