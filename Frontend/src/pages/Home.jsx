import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import EmployeeTable from "../Components/EmployeeTable";

function Home() {
  const employees = useSelector((store) => store.employee.employeesData);
  useEffect(() => {
    console.log(employees);
  }, []);
  return (
    <>
      <Nav />
      <div>
        <EmployeeTable employees={employees}></EmployeeTable>
      </div>
    </>
  );
}

export default Home;
