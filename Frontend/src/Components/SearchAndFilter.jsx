import React from "react";
import { useDispatch } from "react-redux";
import { searchEmployee } from "../store/employeeReducer";

function SearchAndFilter() {
  const dispatch = useDispatch();
  const search = (e) => {
    console.log(e.target.value);
    dispatch(searchEmployee(e.target.value));
  };
  return (
    <>
      <div className="p-4 md:flex justify-between ">
        <div>
          <input
            onInput={search}
            type="text"
            placeholder="Search by name or email"
            className="border border-gray-300 rounded-md p-2 w-80"
          />
        </div>
        <div className="mt-4 md:mt-0">
          <select className="border border-gray-300 rounded-md p-2">
            <option value="">Filter</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchAndFilter;
