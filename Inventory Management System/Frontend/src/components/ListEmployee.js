import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the list of employees
    // Update the employees state using setEmployees
  }, []);

  return (
    <div className="bg-richblack-900 min-h-screen py-6">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-4 text-white">List Employees</h2>
        <Link
          to="/add-employee"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
        >
          Add Employee
        </Link>
        <table className="min-w-full bg-white shadow-md rounded my-4">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">ID</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Name</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Email ID</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Address</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Phone No.</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.Id}>
                <td className="py-2 px-4 border-b border-gray-200">{employee.Id}</td>
                <td className="py-2 px-4 border-b border-gray-200">{employee.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{employee.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">{employee.address}</td>
                <td className="py-2 px-4 border-b border-gray-200">{employee.phone}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <Link
                    to={`/edit-employee/${employee.Id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Update
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    // onClick={() => deleteEmployee(employee.Id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;