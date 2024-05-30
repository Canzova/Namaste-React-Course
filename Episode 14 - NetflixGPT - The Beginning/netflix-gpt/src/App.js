import Body from "./components/Body";
import appStore from "../src/utils/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
