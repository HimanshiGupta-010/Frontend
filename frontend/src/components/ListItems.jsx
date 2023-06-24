import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemServices from "../services/ItemService";
import { toast } from 'react-hot-toast';

const ListItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems();
  }, []);

  const getAllItems = () => {
    ItemServices.getAllItems()
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = (itemId) => {
    ItemServices.deleteItem(itemId)
      .then((response) => {
        toast.success('Item Deleted');
        getAllItems();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container bg-dark min-vh-100 py-4">
      <h2 className="text-center text-white">List Items</h2>
      <div className="mb-3 d-flex justify-content-between">
        <Link to="/assigned-items" className="btn btn-primary mr-2">
          Assigned Items
        </Link>

        <Link to="/add-item" className="btn btn-primary mr-2">
          Add Items
        </Link>
        
        <Link to="/unassigned-items" className="btn btn-primary" style={{ marginLeft: "10px" }}>
          Unassigned Items
        </Link>
      </div>
      <table className="table table-bordered table-striped text-white">
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id}>
              <td>{item.item_id}</td>
              <td>{item.name}</td>
              <td>{item.status ? "True" : "False"}</td>
              <td>
                <Link className="btn btn-info mr-2" to={`/edit-item/${item.item_id}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger" style={{ marginLeft: "10px" }}
                  onClick={() => deleteItem(item.item_id)}
                  disabled={item.status}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;