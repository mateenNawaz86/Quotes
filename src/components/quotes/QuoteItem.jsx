import React from "react";
import classes from "./QuoteItem.module.css";
import FillBtn from "../UI/FillBtn";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`}>
        <FillBtn>View Detail</FillBtn>
      </Link>
    </li>
  );
};

export default QuoteItem;
