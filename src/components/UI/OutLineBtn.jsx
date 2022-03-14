import React from "react";
import classes from "./OutLineBtn.module.css";

const OutLineBtn = (props) => {
  return (
    <button onClick={props.onClick} className={classes.outLineBtn}>
      {props.children}
    </button>
  );
};

export default OutLineBtn;
