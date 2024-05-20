import React, { memo, useEffect, useState } from "react";
import "../../sass/__products.scss";
import { useDeleteProductsMutation } from "../../context/api/productApi";
import { useDeleteusersMutation } from "../../context/api/userApi";
import { useUpdateProductMutation } from "../../context/api/productApi";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slice/heartSlice";
import { Link } from "react-router-dom";
import EditModel from "../editModal/EditModel";

const Products = ({ products, isAdmin, isProduct }) => {
  const [deleteProduct, { isError, isSuccess }] = useDeleteProductsMutation();
  const [editProduct, setEditProduct] = useState(null);
  console.log(editProduct);
  const [deleteUser, { isError: isErrorUser, isSuccess: isSuccessUser }] =
    useDeleteusersMutation();
  const [deletingId, setDeletingId] = useState(null);
  let [data, { isLoading }] = useUpdateProductMutation();
  console.log(data);
  const handleDeleteProducts = (id) => {
    if (isProduct) {
      setDeletingId(id);
      deleteProduct(id);
    } else {
      setDeletingId(id);
      deleteUser(id);
    }
  };

  const wishlist = useSelector((state) => state.heart.value);
  const dispatch = useDispatch();

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
        {isAdmin ? (
          <></>
        ) : (
          <button onClick={() => dispatch(toggleHeart(item))}>
            {wishlist?.some((el) => el.id === item.id) ? (
              <FaHeart style={{ color: "red" }} />
            ) : (
              <FaRegHeart />
            )}
          </button>
        )}
        <Link to={`/product/${item.id}`}>
          <img
            src={isProduct ? item.photo : item.image}
            alt={item.title || item.fname}
          />
        </Link>
      </div>
      <h2>{isProduct ? item.title : `${item.lname} ${item.fname}`}</h2>
      {isProduct ? <h3>${item.price}</h3> : <h3>{item.age}</h3>}
      <div className="btn">
        {isAdmin && (
          <button onClick={() => handleDeleteProducts(item.id)}>
            {deletingId === item.id ? "Deleting..." : "Delete"}
          </button>
        )}
        {isAdmin ? (
          <button onClick={() => setEditProduct(item)}>Edit</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <div className="products__wrapper">
        <div className="container">
          <div className="products__cards">{card}</div>
        </div>
      </div>
      {editProduct ? (
        <EditModel data={editProduct} setdata={setEditProduct} />
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Products);
