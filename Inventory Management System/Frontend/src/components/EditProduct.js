import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/productService.js";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    warranty: "",
    billNumber: "",
    date: ""
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService
      .editProduct(product)
      .then((res) => {
        navigate("/");
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
              <h2 className="text-3xl font-bold text-center">Edit Product</h2>
              {msg && (
                <p className="text-lg text-center text-green-500">{msg}</p>
              )}
              <form onSubmit={(e) => ProductUpdate(e)}>
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

                <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;