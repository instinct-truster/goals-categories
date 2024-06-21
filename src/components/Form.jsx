import Card from "./Card";
import styles from "./Form.module.css";
import Typography from "./Typography";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { addTodo } from "../reducer/todosSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [taskData, setTaskData] = useState({
    name: "",
    category: "",
    done: false,
  });
  const handleAddTodo = () => {
    const todosLength = todos.length;
    dispatch(addTodo({ ...taskData, done: false, id: todosLength + 1 }));
  };
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
        <Button handleAddTodo={() => handleAddTodo()} />
      </Card>
    </div>
  );
}

export default Form;
