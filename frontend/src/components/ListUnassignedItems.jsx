import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemServices from "../services/ItemService";

const ListUnassignedItems = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllItems();
      }, []);

    const getAllItems = () => {
        ItemServices.getAllItems().then((response) => {
            setItems(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {

    //             const itemsResponse = await ItemServices.getAllItems();
    //             const itemsData = itemsResponse.data;
    //             setItems(itemsData);
    //         } 
    //         catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    

    


    return (
      <div className="container">
                  <h2 className='text-white'>Unassigned Item List</h2>
                  {/* Display the list of  umassigned items here */}
                  <div className="bg-dark min-vh-100 py-4">
                      <div className="container">
                          <table className="table table-bordered table-striped">
                              <thead className="bg-gray-200">
                                  <tr>
                                      <th>Item ID</th>
                                      <th>Item Name</th>
                                      {/* <th>Actions</th> */}
                                  </tr>
                              </thead>
                              <tbody>
                                  {items.map((item) => {
                                    if (item.status === false) {
                                    return(
                                      <tr key={item.status}>
                                          <td>{item.item_id}</td>
                                          <td>{item.name}</td>
                                      </tr>
                                    )
                                    }
                                  })}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
         
     
  );
};

export default ListUnassignedItems;