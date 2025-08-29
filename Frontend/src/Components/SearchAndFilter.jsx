import React from "react";

function SearchAndFilter() {
  return (
    <>
      <div className="p-4 md:flex justify-between ">
        <div>
          <input
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
