import React, { useEffect } from "react";
import "../../sass/__editModel.scss";
import { useUpdateProductMutation } from "../../context/api/productApi";
const EditModel = ({ data, setdata }) => {
  let [updateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();
  useEffect(() => {
    if (isSuccess) {
      setdata(null);
    }
  }, [isSuccess]);
  const handeUpdateProduct = (e) => {
    e.preventDefault();
    let product = {
      title: data.title,
      price: data.price,
    };
    updateProduct({ body: product, id: data.id });
  };
  return (
    <>
      <div onClick={() => setdata(null)} className="edit__overly"></div>
      <form onSubmit={handeUpdateProduct} className="edit__wrapper">
        <h1>Update Products</h1>
        <input
          value={data.title}
          onChange={(e) =>
            setdata((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          placeholder="edit name"
        />
        <input
          value={data.price}
          onChange={(e) =>
            setdata((prev) => ({ ...prev, price: e.target.value }))
          }
          type="number"
          placeholder="edit price"
        />
        <button disabled={isLoading} className="btn1">
          {isLoading ? "Loading" : "Save"}
        </button>
        <button type="button" onClick={() => setdata(null)}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditModel;
