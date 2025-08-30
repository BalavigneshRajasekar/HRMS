import { createSlice } from "@reduxjs/toolkit";
import data from "../employeeData.json";
const employeeReducer = createSlice({
  name: "employee",
  initialState: {
    employeesData: data,
    formModal: false,
    editEmployee: null,
  },
  reducers: {
    addEmployee: (state, action) => {
      console.log("Employee Added");
      state.employeesData.push(action.payload);
    },
    openFormModel: (state, action) => {
      state.formModal = state.formModal == false ? true : false;
    },
  },
});

export const { addEmployee, openFormModel } = employeeReducer.actions;
export default employeeReducer.reducer;
