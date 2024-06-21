import styles from "./Todoslist.module.css";
import Card from "./Card";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import Typography from "./Typography";

function Todoslist() {
  const { todos, category } = useSelector((state) => state.todos);
  const displayedTodos = todos.filter((todo) => todo.category === category);
  return (
    <div className={styles.todoslist}>
      {displayedTodos.length > 0 ? (
        displayedTodos.map((todo) => (
          <Card key={todo.id}>
            <TodoItem todo={todo} />
          </Card>
        ))
      ) : (
        <Typography>No goals are yet created</Typography>
      )}
    </div>
  );
}

export default Todoslist;
