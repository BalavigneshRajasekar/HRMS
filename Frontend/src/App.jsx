import "./App.css";
import { Provider, useSelector } from "react-redux";

import AppRoutes from "./routers/AppRoutes";
import Home from "./pages/Home";
import employeeStore from "./store/employeeStore";

function App() {
  return (
    <>
      <Provider store={employeeStore}>
        <AppRoutes></AppRoutes>
      </Provider>
    </>
  );
}

export default App;
