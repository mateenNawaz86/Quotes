import React from "react";
import classes from "./Fill-Button.module.css";

const FillBtn = (props) => {
  return (
    <button
      className={classes.fillBtn}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default FillBtn;
