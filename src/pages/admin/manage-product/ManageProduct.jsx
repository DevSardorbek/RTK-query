import React from "react";
import { useGetProductsQuery } from "../../../context/api/productApi";
import Products from "../../../components/products/Products";
const ManageProduct = () => {
  let { data, error, isError, isLoading, isSuccess } = useGetProductsQuery();
  console.log(data);
  return (
    <div>
      <Products isAdmin={true} isProduct={true} products={data} />
    </div>
  );
};

export default ManageProduct;
