import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import EmployeeTable from "../Components/EmployeeTable";
import SearchAndFilter from "../Components/SearchAndFilter";
import Form from "../Components/Form";

function Home() {
  const employees = useSelector((store) => store.employee.employeesData);
  const filteredEmployee = useSelector(
    (store) => store.employee.filteredEmployeeData
  );
  useEffect(() => {
    console.log(employees);
  }, [employees]);
  return (
    <>
      <Nav />

      <div className="p-10">
        <SearchAndFilter></SearchAndFilter>
        <EmployeeTable
          employees={filteredEmployee ? filteredEmployee : employees}
        ></EmployeeTable>
        <Form></Form>
      </div>
    </>
  );
}

export default Home;
