import React from "react";
import OutLineBtn from "../UI/OutLineBtn";
import { useNavigate, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quote, ascending) => {
  return quote.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteB.id > quoteA.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortAscending = queryParams.get("sort") === "ascending";

  const changeSortHandler = () => {
    navigate("/quotes?sort=" + (isSortAscending ? "descending" : "ascending"));
  };

  // function for changing the order of list
  const changeOrderQuotes = sortQuotes(props.quotes, isSortAscending);
  return (
    <>
      <div className={classes.sorting}>
        <OutLineBtn onClick={changeSortHandler}>
          Sort {isSortAscending ? "Descending" : "Ascending"}
        </OutLineBtn>
      </div>
      <ul className={classes.list}>
        {changeOrderQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
