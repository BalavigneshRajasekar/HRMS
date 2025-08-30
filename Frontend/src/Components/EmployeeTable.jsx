import React from "react";
import { useDispatch } from "react-redux";
import { openFormModel, setEditEmployee } from "../store/employeeReducer";

function EmployeeTable({ employees }) {
  const dispatch = useDispatch();
  return (
    <div className="overflow-x-auto p-4 ">
      <div>
        <button
          className="active:scale-75 transition-all"
          onClick={() => dispatch(openFormModel())}
        >
          Add employee
        </button>
      </div>
      <table className="min-w-full border border-gray-300 rounded-lg shadow-lg bg-white mt-4 overflow-scroll">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Department
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Status
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold">
              Action
            </th>
          </tr>
        </thead>
        {employees.length > 0 ? (
          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="hover:bg-gray-50 transition-colors border-t"
              >
                <td className="px-6 py-3 text-sm">{emp.id}</td>
                <td className="px-6 py-3 text-sm font-medium">{emp.name}</td>
                <td className="px-6 py-3 text-sm">{emp.role}</td>
                <td className="px-6 py-3 text-sm">{emp.Department}</td>
                <td
                  className={`px-6 py-3 text-sm font-semibold ${
                    emp.status === "active" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {emp.status}
                </td>
                <td>
                  <button
                    className="px-5 bg-yellow-500 text-sm active:scale-90 transition-all"
                    onClick={() => dispatch(setEditEmployee(emp))}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="6" className="text-center p-4 text-gray-500">
                No employees found.
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

export default EmployeeTable;
