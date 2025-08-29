import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeReducer";
const employeeStore = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default employeeStore;
