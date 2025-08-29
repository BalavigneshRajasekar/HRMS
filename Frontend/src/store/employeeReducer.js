import { createSlice } from "@reduxjs/toolkit";
import data from "../employeeData.json";
const employeeReducer = createSlice({
  name: "employee",
  initialState: {
    employeesData: data,
  },
  reducers: {
    addEmployee: (state, action) => {
      console.log("Employee Added");
    },
  },
});

export const { addEmployee } = employeeReducer.actions;
export default employeeReducer.reducer;
