import React from "react";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import Loading from "../../components/loading/Loading";

const Home = () => {
  let { data, error, isLoading, isError, isSuccess } = useGetProductsQuery();
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Products isAdmin={false} products={data} isProduct={true} />
      )}
    </div>
  );
};

export default Home;
