import React from "react";
import { useSelector, useDispatch } from "react-redux";

import FillBtn from "../UI/FillBtn";
import { uiActions } from "../../store/ui-slice";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const isAddingComment = useSelector((state) => state.ui.isAddingComment);
  const dispatch = useDispatch();

  const startAddCommentHandler = () => {
    dispatch(uiActions.addComment());
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <FillBtn onClick={startAddCommentHandler}>Add a Comment</FillBtn>
      )}
      {isAddingComment && <NewCommentForm />}
    </section>
  );
};

export default Comments;
