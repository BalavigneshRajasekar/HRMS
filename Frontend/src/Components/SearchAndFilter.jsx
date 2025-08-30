import React from "react";
import { useDispatch } from "react-redux";
import { filterEmployee, searchEmployee } from "../store/employeeReducer";

function SearchAndFilter() {
  const dispatch = useDispatch();
  let debounceTimer;

  // Debounced search function
  const search = (e) => {
    const value = e.target.value;
    clearTimeout(debounceTimer); // clear previous timer

    debounceTimer = setTimeout(() => {
      console.log("Searching for:", value);
      dispatch(searchEmployee(value)); // only runs after 500ms
    }, 500);
  };

  const filter = (e) => {
    const value = e.target.value;
    dispatch(filterEmployee(value));
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
          <select
            className="border border-gray-300 rounded-md p-2"
            onChange={filter}
          >
            <option value="">Filter</option>
            <option value="Human Resource">Human Resource</option>
            <option value="Development">Development</option>
            <option value="Testings">Testing</option>
            <option value="Operations">Operations</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchAndFilter;
