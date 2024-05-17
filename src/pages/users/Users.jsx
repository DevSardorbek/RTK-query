import React from "react";
import { useGetusersQuery } from "../../context/api/userApi";
import Products from "../../components/products/Products";
const Users = () => {
  let { data, isLoading, isError, isSuccess } = useGetusersQuery();
  console.log("users", data);
  return (
    <div>
      <Products products={data} isProduct={false} />
    </div>
  );
};

export default Users;
