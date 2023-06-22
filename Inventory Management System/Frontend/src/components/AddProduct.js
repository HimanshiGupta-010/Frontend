import React, { useState } from "react";
import productService from "../services/productService.js";

const AddProduct = () => {
  const [msg, setMsg] = useState("");

  const [product, setProduct] = useState({
    productName: "",
    warranty: "",
    billNumber: "",
    date: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
          productName: "",
          warranty: "",
          billNumber: "",
          date: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
              <h2 className="text-3xl font-bold text-center">Add Product</h2>
              {msg && (
                <p className="text-lg text-center text-green-500">{msg}</p>
              )}
              <form onSubmit={(e) => ProductRegister(e)}>
                <div className="mb-4">
                  <label className="block mb-2">Enter Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    className="w-full px-3 py-2 border rounded-lg"
                    onChange={(e) => handleChange(e)}
                    value={product.productName}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Enter Warranty</label>
                  <input
                    type="text"
                    name="warranty"
                    className="w-full px-3 py-2 border rounded-lg"
                    onChange={(e) => handleChange(e)}
                    value={product.warranty}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Enter Bill Number</label>
                  <input
                    type="text"
                    name="billNumber"
                    className="w-full px-3 py-2 border rounded-lg"
                    onChange={(e) => handleChange(e)}
                    value={product.billNumber}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-2">Enter Date</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full px-3 py-2 border rounded-lg"
                    onChange={(e) => handleChange(e)}
                    value={product.date}
                  />
                </div>

                {/* <div className="flex justify-between">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md"
              onClick={(e) => saveOrUpdateEmployee(e)}
            >
              Submit
            </button>
            <Link
              to="/employees"
              className="bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Cancel
            </Link>
          </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;