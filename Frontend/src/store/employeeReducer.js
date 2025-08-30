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
      // Assign ID based on current length of employeesData
      // We only make employee active or inactive instead of delete so it will work
      state.employeesData.length === 0
        ? (action.payload = { ...action.payload, id: 1 })
        : (action.payload = {
            ...action.payload,
            id: state.employeesData.length + 1,
          });

      state.employeesData.push(action.payload);
    },
    openFormModel: (state, action) => {
      state.editEmployee = null;
      state.formModal = state.formModal == false ? true : false;
    },
    closeFormModel: (state, action) => {
      state.formModal = false;
    },
    setEditEmployee: (state, action) => {
      console.log(action.payload);
      state.editEmployee = action.payload;
      state.formModal = true;
    },
    updateEditedEmployee: (state, action) => {
      //Get the index of the employee to be updated
      const index = state.employeesData.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employeesData[index] = action.payload;
      }
      state.editEmployee = null;
      state.formModal = false;
    },
  },
});

export const {
  addEmployee,
  openFormModel,
  closeFormModel,
  setEditEmployee,
  updateEditedEmployee,
} = employeeReducer.actions;
export default employeeReducer.reducer;
