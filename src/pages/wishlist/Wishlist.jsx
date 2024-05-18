import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.heart.value) || [];
  console.log("wish", wishlist);

  return (
    <div className="wishlist">
      {wishlist.length ? (
        <Products
          title="Sevimlilar"
          products={wishlist}
          isAdmin={false}
          isProduct={true}
        />
      ) : (
        <Empty text="Wishlist" />
      )}
    </div>
  );
};

export default Wishlist;
