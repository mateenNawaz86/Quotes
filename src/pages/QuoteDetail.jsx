import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  return (
    <>
      <h2>Quote Detail Page</h2>
      <p>{params.quoteID}</p>
      <Comments />
    </>
  );
};

export default QuoteDetail;
