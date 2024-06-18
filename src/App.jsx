import { MainContainer, Title, Typography } from "./components";
import Todoslist from "./components/Todoslist";

function App() {
  return (
    <MainContainer>
      <Title />
      <Typography fontSize={24} bold marginTop={38}>
        List of Tasks
      </Typography>
      <Todoslist />
    </MainContainer>
  );
}

export default App;
