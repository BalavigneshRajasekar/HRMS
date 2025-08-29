import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import EmployeeTable from "../Components/EmployeeTable";
import SearchAndFilter from "../Components/SearchAndFilter";

function Home() {
  const employees = useSelector((store) => store.employee.employeesData);
  useEffect(() => {
    console.log(employees);
  }, []);
  return (
    <>
      <Nav />

      <div className="p-10">
        <SearchAndFilter></SearchAndFilter>
        <EmployeeTable employees={employees}></EmployeeTable>
      </div>
    </>
  );
}

export default Home;
