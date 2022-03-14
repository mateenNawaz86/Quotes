import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import Card from "../UI/Card";
import FillBtn from "../UI/FillBtn";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const focusHandler = () => {
    dispatch(uiActions.setEntering(true));
    console.log("focus");
  };

  return (
    <>
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={focusHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              ref={authorInputRef}
              autoComplete="off"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <FillBtn>Add Quote</FillBtn>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
