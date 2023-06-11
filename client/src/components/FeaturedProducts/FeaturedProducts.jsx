import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const FeaturedProducts = ({ type, desc }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  console.log(data);


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        {/* <p>
          check out our latest {desc} products
        </p> */}
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
