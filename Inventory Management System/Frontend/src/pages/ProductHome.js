import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductHome = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   init();
  // }, []);

  // const init = () => {
  //   productService
  //     .getAllProduct()
  //     .then((res) => {
  //       setProductList(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const deleteProduct = (id) => {
  //   productService
  //     .deleteProduct(id)
  //     .then((res) => {
  //       setMsg("Delete Successfully");
  //       init();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container mx-auto">
      <h2 className="text-center">All Product List</h2>
      {msg && <p className="text-success text-center">{msg}</p>}
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2">SL No.</th>
            <th className="py-2">Product Name</th>
            <th className="py-2">Warranty</th>
            <th className="py-2">Bill Number</th>
            <th className="py-2">Date</th>
            <th className="py-2">Action</th>
            <th className="py-2">Assign</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((p, index) => (
            <tr key={p.id} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{p.productName}</td>
              <td className="py-2">{p.warranty}</td>
              <td className="py-2">{p.billNumber}</td>
              <td className="py-2">{p.date}</td>
              <td className="py-2">
                <Link
                  to={"editProduct/" + p.id}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </Link>
                <button
                  // onClick={() => deleteProduct(p.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </td>
              <td className="py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Assign
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                  Unassign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductHome;