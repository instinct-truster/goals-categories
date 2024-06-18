import styles from "./Card.module.css";
import Typography from "./Typography";
import Checkbox from "./Checkbox";
import ActionButton from "./ActionButton";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.taskName}>
        <Checkbox />
        <Typography fontSize={24}>Do the dishes</Typography>
      </div>
      <div className={styles.actionButton}>
        <ActionButton icon={edit} handleClick={() => null} />
        <ActionButton icon={trash} handleClick={() => null} />
      </div>
    </div>
  );
}

export default Card;
