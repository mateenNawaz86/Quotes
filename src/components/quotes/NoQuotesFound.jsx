import React from "react";
import classes from "./NoQuotesFound.module.css";
import FillBtn from "../UI/FillBtn";
import { Link } from "react-router-dom";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link to="/new-quotes">
        <FillBtn>Add Quote</FillBtn>
      </Link>
    </div>
  );
};

export default NoQuotesFound;
