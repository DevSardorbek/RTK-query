import React from "react";
import { useGetusersQuery } from "../../../context/api/userApi";
import Products from "../../../components/products/Products";
const ManageUser = () => {
  let { data, isLoading, isError, isSuccess } = useGetusersQuery();
  console.log(data);
  return (
    <div>
      <Products isAdmin={true} isProduct={false} products={data} />
    </div>
  );
};

export default ManageUser;
