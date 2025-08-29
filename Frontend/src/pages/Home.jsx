import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Home() {
  const employees = useSelector((store) => store.employee.employeesData);
  useEffect(() => {
    console.log(employees);
  }, []);
  return (
    <>
      <h1>Employee data</h1>
    </>
  );
}

export default Home;
