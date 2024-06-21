import {
  MainContainer,
  Title,
  Typography,
  Card,
  TodosList,
  ProgressBar,
  Form,
  CategoriesList,
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const { category } = useSelector((state) => state.todos);
  return (
    <MainContainer>
      <Title />
      <Typography fontSize={24} bold marginTop={38} marginBottom={17}>
        List of <span style={{ textTransform: "uppercase" }}>{category}</span>{" "}
        Tasks
      </Typography>

      <MainContainer flexrow>
        <TodosList />
        <MainContainer flexcol>
          <Card col>
            <Typography fontSize={24} bold>
              List of Tasks
            </Typography>
            <ProgressBar />
          </Card>
          <Form />
        </MainContainer>
      </MainContainer>
      <CategoriesList />
    </MainContainer>
  );
}

export default App;
