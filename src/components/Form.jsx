import Card from "./Card";
import styles from "./Form.module.css";
import Typography from "./Typography";

function Form() {
  return (
    <div className={styles.form}>
      <Typography fontSize={24} bold>
        Add New Task
      </Typography>
      <Card>
        <Typography fontSize={16}>Task Name:</Typography>
        <input type="text" />
        <Typography fontSize={16}>Category:</Typography>
        <input type="text" />
      </Card>
      <button>ADD</button>
    </div>
  );
}

export default Form;
