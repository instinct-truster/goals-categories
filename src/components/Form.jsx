import Card from "./Card";
import styles from "./Form.module.css";
import Typography from "./Typography";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Form() {
  const [taskData, setTaskData] = useState({ name: "", category: "" });
  return (
    <div className={styles.form}>
      <Typography fontSize={24} bold>
        Add New Task
      </Typography>
      <Card col>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Task Name:</Typography>
          <input
            onChange={(e) => setTaskData({ ...taskData, name: e.target.value })}
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Category:</Typography>
          <Dropdown taskData={taskData} setTaskData={setTaskData} />
        </div>
        <Button />
      </Card>
    </div>
  );
}

export default Form;
