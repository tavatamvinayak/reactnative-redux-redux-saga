import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
}
