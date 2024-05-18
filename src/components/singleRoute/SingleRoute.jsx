import React from "react";
import { useParams } from "react-router-dom";
import { useGetDetailProductQuery } from "../../context/api/productApi";
import "../../sass/__singleRoute.scss";

const SingleRoute = () => {
  const { id } = useParams();
  const { data } = useGetDetailProductQuery(id);
  console.log("single", data);
  return (
    <div className="single_route">
      <div className="container">
        <div className="single_card">
          <img style={{ width: "500px" }} src={data?.photo} alt="" />

          <div className="single_card_info">
            <h1>{data?.category}</h1>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <div className="buy">
              <span>${data?.price}</span>
              {/* <button>
                <BiSolidShoppingBag />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
