import { createSlice } from "@reduxjs/toolkit";
import data from "../employeeData.json";
const employeeReducer = createSlice({
  name: "employee",
  initialState: {
    employeesData: localStorage.getItem("employees")
      ? JSON.parse(localStorage.getItem("employees"))
      : data,
    filteredEmployeeData: null, // For search and filter functionality
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
      localStorage.setItem("employees", JSON.stringify(state.employeesData));
    },
    //Open the form model and close
    openFormModel: (state, action) => {
      state.editEmployee = null;
      state.formModal = state.formModal == false ? true : false;
    },
    //Work for only close the form model
    closeFormModel: (state, action) => {
      state.formModal = false;
    },
    //Set the employee to be edited and open the form model
    setEditEmployee: (state, action) => {
      console.log(action.payload);
      state.editEmployee = action.payload;
      state.formModal = true;
    },
    //Update the edited employee details
    updateEditedEmployee: (state, action) => {
      //Get the index of the employee to be updated
      const index = state.employeesData.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employeesData[index] = action.payload;
      }
      localStorage.setItem("employees", JSON.stringify(state.employeesData));
      state.editEmployee = null;
      state.formModal = false;
    },

    searchEmployee: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      // If search term is empty, it clear the filter data
      //So original data will be displayed in the table
      if (searchTerm === "") {
        state.filteredEmployeeData = null;
        return;
      }
      state.filteredEmployeeData = state.employeesData.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchTerm) ||
          emp.email.toLowerCase().includes(searchTerm)
      );
    },
    filterEmployee: (state, action) => {
      const filterTerm = action.payload;
      if (filterTerm === "") {
        state.filteredEmployeeData = null;
        return;
      }
      state.filteredEmployeeData = state.employeesData.filter(
        (emp) => emp.Department === filterTerm
      );
    },
  },
});

export const {
  addEmployee,
  openFormModel,
  closeFormModel,
  setEditEmployee,
  updateEditedEmployee,
  searchEmployee,
  filterEmployee,
} = employeeReducer.actions;
export default employeeReducer.reducer;
