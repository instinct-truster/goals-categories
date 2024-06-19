import { MainContainer, Title, Typography } from "./components";
import Card from "./components/Card";
import Todoslist from "./components/Todoslist";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <MainContainer>
      <Title />
      <Typography fontSize={24} bold marginTop={38} marginBottom={17}>
        List of Tasks
      </Typography>
      <MainContainer flexcol>
        <MainContainer flexrow>
          <Todoslist />
          <Card col>
            <Typography fontSize={24} bold>
              List of Tasks
            </Typography>
            <ProgressBar progress={"60%"} />
          </Card>
        </MainContainer>
      </MainContainer>
    </MainContainer>
  );
}

export default App;
