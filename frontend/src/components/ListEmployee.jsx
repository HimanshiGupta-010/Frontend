import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeService';
import ItemServices from "../services/ItemService";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, [])

  const getAllEmployees = () => {
    EmployeeServices.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deleteEmployee = async (employeeId, employeeItemId) => {
    if (employeeItemId) {
      const itemResponse = await ItemServices.getItemById(employeeItemId);
      const itemData = itemResponse.data;
      const itemName = itemData.name;
      const item = { name: itemName, status: false };
      await ItemServices.updateItem(employeeItemId, item);
    }
    EmployeeServices.deleteEmployee(employeeId)
      .then(() => {
        toast.success("Employee Deleted");
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const unassignItem = async (employeeId, name, employeeItemId) => {
    const employee = { name };

    try {
      await EmployeeServices.updateEmployee(employeeId, employee);
      const itemResponse = await ItemServices.getItemById(employeeItemId);
      const itemData = itemResponse.data;
      const itemName = itemData.name;
      const item = { name: itemName, status: false };
      await ItemServices.updateItem(employeeItemId, item);
      toast.success('Item Unassigned');
      navigate('/unassigned-items');
    } catch (error) {
      console.log("Unassigned Task Failed");
    }
  }

  return (
    <div className="bg-dark min-vh-100 py-4">
      <div className="container">
        <h2 className="text-center text-2xl font-weight-bold mb-4 text-white">Assign - Unassign Item</h2>
        <div className="d-flex justify-content-between mb-2">
          <Link to="/add-employee" className="btn btn-primary">Add Employee</Link>
          <Link to="/list-items" className="btn btn-primary">List Items</Link>
        </div>
        <table className="table table-bordered table-striped">
          <thead className="bg-gray-200">
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Item ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.emp_id}>
                <td>{employee.emp_id}</td>
                <td>{employee.name}</td>
                <td>{employee.itemId}</td>
                <td>
                                    <Link className="btn btn-info mr-2" to={`/edit-employee/${employee.emp_id}`}>
                                        Update
                                    </Link>
                                    {employee.itemId ? (
                                        <button className="btn btn-danger mr-2" style={{ marginLeft: "10px" }}
                                            onClick={() => unassignItem(employee.emp_id, employee.name, employee.itemId)}>
                                            
                                            Unassign
                                        </button>
                                    ) : (<Link className="btn btn-success  mr-2" style={{ marginLeft: "10px" }} to={`/assign/${employee.emp_id}`}>
                                            Assign
                                        </Link>
                                    )}
                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }}
                                        onClick={() => deleteEmployee(employee.emp_id, employee.itemId)}>
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

export default ListEmployee;