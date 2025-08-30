import React, { useState } from "react";
import { useSelector } from "react-redux";

function Form() {
  const { formModal, editEmployee } = useSelector((store) => store.employee);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    DOJ: "",
    role: "",
    Department: "",
    status: "",
  });
  const [formError, setFormError] = useState({
    name: null,
    email: null,
    DOJ: null,
    role: null,
    Department: null,
    status: null,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: null });
  };
  // Function to handle form validation
  const formValidation = () => {
    // Local variable to hold errors for immediate return
    const newErrors = {
      email: !/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(
        formData.email
      )
        ? "* please enter a valid email"
        : null,
      name:
        formData.name.trim() === "" ? "* please enter a Employee name" : null,
      DOJ: formData.DOJ === "" ? "* please select a valid DOJ" : null,
      role: formData.role.trim() === "" ? "* please enter a Role" : null,
      Department:
        formData.Department === "" ? "* please select a department" : null,
      status: formData.status === "" ? "* please Select a status" : null,
    };
    // Update errors state Asynchronously
    setFormError(newErrors);
    // Here we use Local variable to calculate return response
    return Object.values(newErrors).every((error) => error === null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      console.log("Form submitted", formData);
    }
  };
  return (
    <>
      {/* Modal */}
      {formModal && (
        <div className={`style flex items-center justify-center  `}>
          <div className="bg-white rounded-lg shadow-lg  max-w-md p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4">
              {editEmployee ? "Edit Employee Data" : "Add New Employee"}
            </h2>

            <form noValidate className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Employee Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
              {formError.name && (
                <p className="text-red-400 -mt-3 ">{formError.name}</p>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
              {formError.email && (
                <p className="text-red-400 -mt-3">{formError.email}</p>
              )}
              <input
                type="date"
                name="DOJ"
                value={formData.DOJ}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
              {formError.DOJ && (
                <p className="text-red-400 -mt-3">{formError.DOJ}</p>
              )}
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              {formError.role && (
                <p className="text-red-400 -mt-3">{formError.role}</p>
              )}
              <select
                name="Department"
                value={formData.Department}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Department</option>
                <option value="Development">Development</option>
                <option value="Testing">Testing</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Operation">Operation</option>
                <option value="Designing">Designing</option>
              </select>
              {formError.Department && (
                <p className="text-red-400 -mt-3">{formError.Department}</p>
              )}
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              {formError.status && (
                <p className="text-red-400 -mt-3">{formError.status}</p>
              )}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
