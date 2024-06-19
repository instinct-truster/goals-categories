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

function App() {
  return (
    <MainContainer>
      <Title />
      <Typography fontSize={24} bold marginTop={38} marginBottom={17}>
        List of Tasks
      </Typography>

      <MainContainer flexrow>
        <TodosList />
        <MainContainer flexcol>
          <Card col>
            <Typography fontSize={24} bold>
              List of Tasks
            </Typography>
            <ProgressBar progress={"60%"} />
          </Card>
          <Form />
        </MainContainer>
      </MainContainer>
      <CategoriesList />
    </MainContainer>
  );
}

export default App;
