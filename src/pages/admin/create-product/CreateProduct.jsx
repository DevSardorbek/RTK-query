import React, { useState, useEffect } from "react";
import "../../../sass/__createProduct.scss";
import { usePostproductsMutation } from "../../../context/api/productApi";
import { toast } from "react-toastify";

let initialstate = {
  title: "",
  price: "",
};

const CreateProduct = () => {
  let [createProduct, { isError, isLoading, isSuccess }] =
    usePostproductsMutation();

  const [newProduct, setNewProduct] = useState(initialstate);

  useEffect(() => {
    if (isSuccess) {
      setNewProduct(initialstate);
      toast.success("Product Qo'shildi");
    }
  }, [isSuccess]); // Bu yerda isSuccess ni kuzatamiz

  const handleCreateProduct = (e) => {
    e.preventDefault();
    console.log(newProduct);
    createProduct(newProduct);
  };

  return (
    <div className="create_product">
      <div className="container">
        <form onSubmit={handleCreateProduct}>
          <input
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            placeholder="Product-name"
          />
          <input
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: e.target.value }))
            }
            type="number"
            placeholder="Product-price"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
