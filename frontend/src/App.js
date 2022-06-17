import { Header } from "./components/Header";
import { GlobalState } from "./global/GlobalState";
import { Router } from "./router/Router";


export const App = () => {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
