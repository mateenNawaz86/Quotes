import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h2 style={{ marginTop: "3%" }}>Product Detail</h2>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetail;
