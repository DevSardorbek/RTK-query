import React, { memo, useEffect, useState } from "react";
import "../../sass/__products.scss";
import { useDeleteProductsMutation } from "../../context/api/productApi";
import { useDeleteusersMutation } from "../../context/api/userApi";
import { toast } from "react-toastify";
// import { FaRegHeart } from "react-icons/fa";

const Products = ({ products, isAdmin, isProduct }) => {
  const [deleteProduct, { isError, isSuccess }] = useDeleteProductsMutation();
  const [deleteUser, { isError: isErrorUser, isSuccess: isSuccessUser }] =
    useDeleteusersMutation();
  const [deletingId, setDeletingId] = useState(null);
  const handleDeleteProducts = (id) => {
    if (isProduct) {
      setDeletingId(id);
      deleteProduct(id);
    } else {
      setDeletingId(id);
      deleteUser(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Product successfully deleted");
      setDeletingId(null);
    }
    if (isError) {
      toast.error("Failed to delete product");
      setDeletingId(null);
    }
  }, [isSuccess, isError]);

  const card = products?.map((item) => (
    <div className="products__card" key={item.id}>
      <div className="card__img">
        {/* <FaRegHeart /> */}
        <img
          src={isProduct ? item.photo : item.image}
          alt={item.title || item.fname}
        />
      </div>
      <h2>{isProduct ? item.title : `${item.lname} ${item.fname}`}</h2>
      {isProduct ? <h3>${item.price}</h3> : <h3>{item.age}</h3>}
      {isAdmin && (
        <button onClick={() => handleDeleteProducts(item.id)}>
          {deletingId === item.id ? "Deleting..." : "Delete"}
        </button>
      )}
    </div>
  ));

  return (
    <div className="products__wrapper">
      <div className="container">
        <div className="products__cards">{card}</div>
      </div>
    </div>
  );
};

export default memo(Products);
