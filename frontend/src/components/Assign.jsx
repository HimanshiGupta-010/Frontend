import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import ItemServices from "../services/ItemService";
import { toast } from 'react-hot-toast';

const Assign = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState('');
    const navigate = useNavigate();

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeResponse = await EmployeeService.getEmployeeById(id);
                const employeeData = employeeResponse.data;
                setName(employeeData.name);
                const itemsResponse = await ItemServices.getAllItems();
                const itemsData = itemsResponse.data;
                setItems(itemsData);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const saveEmployee = async (e) => {
        e.preventDefault();
        const employee = {name, itemId}
        console.log(employee);
        console.log(id);

        if(id)
        {

            try {
                const employeeResponse = await EmployeeService.updateEmployee(id, employee);
                console.log("Employee update success:", employeeResponse);
                const itemResponse = await ItemServices.getItemById(itemId);
                const itemData = itemResponse.data;
                console.log("Item Name ", itemData.name);
                const itemName = itemData.name;
                console.log(itemName);
                const item = {  name : itemName, status: true };
                console.log(item)
                const response = await ItemServices.updateItem(itemId, item);
                console.log("Success Log");
                navigate('/assign-unassign-item')
                toast.success("Item Assigned");
            } 
            catch (error) {
                console.log("Employee update error:", error);
            }
        }   
    }

    const selectItem = (item_id, event) => {
        event.preventDefault();
        setItemId(item_id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    // Perform the assignment logic here
    // You can access the form data using the state values
    
    // console.log('Employee Name:', name);
    // console.log('Item Assigned:', itemAssigned);
    };



    return (
      <div className="container bg-dark min-vh-100 ">
          <div className="row">
              <div className="col-lg-6">
                  <h2 className='text-white'>Assign Item</h2>
                  <form>
                      <div className="form-group mb-2">
                          <label className="form-label text-white">Employee ID</label>
                          <input
                          required
                          type="text"
                          placeholder="Enter Employee ID"
                          name="id"
                          className="form-control"
                          value={id}
                          readOnly
                          />
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label text-white">Employee Name</label>
                          <input
                          required
                          type="text"
                          placeholder="Enter First Name"
                          name="name"
                          className="form-control"
                          value={name}
                          readOnly
                          />
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label text-white">Item ID</label>
                          <input
                          required
                          type="text"
                          placeholder="Enter Item ID"
                          name="itemId"
                          className="form-control"
                          value={itemId}
                          onChange={(e) => setItemId(e.target.value)}
                          readOnly
                          />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}
                      disabled={!itemId} 
                       // Disable the button if Item ID is not filled
                       >
                          Assign
                      </button>
                  </form>
              </div>
              <div className="col-lg-6">
                  <h2 className='text-white'>Item List</h2>
                  {/* Display the list of items here */}
                  <div className="bg-dark min-vh-100 py-4">
                      <div className="container">
                          <table className="table table-bordered table-striped">
                              <thead className="bg-gray-200">
                                  <tr>
                                      <th>Item ID</th>
                                      <th>Item Name</th>
                                      <th>Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {items.map((item) => {
                                    if (item.status === false) {
                                    return(
                                      <tr key={item.status}>
                                          <td>{item.item_id}</td>
                                          <td>{item.name}</td>
                                          <td>{/* Add any necessary actions */}
                                                <button className="btn btn-info" 
                                                onClick={(event) => selectItem(item.item_id, event)}>
                                                  Select
                                                </button>
                                          </td>
                                      </tr>
                                    )
                                    }
                                  })}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Assign;