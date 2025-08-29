import React from "react";

function EmployeeTable({ employees }) {
  return (
    <div className="overflow-x-auto p-4 ">
      <table className="min-w-full border border-gray-300 rounded-lg shadow-lg bg-white">
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
          </tr>
        </thead>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
