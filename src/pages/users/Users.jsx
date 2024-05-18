import React from "react";
import { useGetusersQuery } from "../../context/api/userApi";
import Products from "../../components/products/Products";
import Loading from "../../components/loading/Loading";
const Users = () => {
  let { data, isLoading, isError, isSuccess } = useGetusersQuery();
  return (
    <div>
      {isLoading ? <Loading /> : <Products products={data} isProduct={false} />}
    </div>
  );
};

export default Users;
