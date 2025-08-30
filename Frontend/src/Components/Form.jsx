import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, closeFormModel } from "../store/employeeReducer";

function Form() {
  const { formModal, editEmployee } = useSelector((store) => store.employee);
  const dispatch = useDispatch();
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

  //Update data to the local form state
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
      DOJ:
        formData.DOJ === "" || new Date(formData.DOJ) >= new Date()
          ? "* please select a valid  DOJ"
          : null,
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

  //Send form data to store if validation is success
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      console.log("Form submitted", formData);
      dispatch(addEmployee(formData));
      dispatch(closeFormModel());
      setFormData({
        name: "",
        email: "",
        DOJ: "",
        role: "",
        Department: "",
        status: "",
      });
    }
  };
  return (
    <>
      {/* Modal */}
      {formModal && (
        <div className={`style min-w-96`}>
          <div className="bg-white rounded-lg shadow-lg  max-w-md p-6 relative">
            {/* Close button */}
            <span
              onClick={() => dispatch(closeFormModel())}
              className="absolute top-3 right-3 text-red-600 font-bold cursor-pointer text-lg bg-blue-200 p-2 px-4 active:scale-90 transition-all rounded-full"
            >
              X
            </span>

            <h2 className="text-xl font-bold mb-4">
              {editEmployee ? "Edit Employee Data" : "Add New Employee"}
            </h2>

            <form noValidate className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Employee Name"
                value={editEmployee ? editEmployee.name : formData.name}
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
                value={editEmployee ? editEmployee.email : formData.email}
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
                value={editEmployee ? editEmployee.DOJ : formData.DOJ}
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
                value={editEmployee ? editEmployee.role : formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              {formError.role && (
                <p className="text-red-400 -mt-3">{formError.role}</p>
              )}
              <select
                name="Department"
                value={
                  editEmployee ? editEmployee.Department : formData.Department
                }
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
                value={editEmployee ? editEmployee.status : formData.status}
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
