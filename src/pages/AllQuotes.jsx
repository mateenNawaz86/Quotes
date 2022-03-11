import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Mateen",
    text: "Never give up!",
  },
  {
    id: "q2",
    author: "Arslan",
    text: "Today is hard, tomorrow will be worst but the day after tomorrow will be shine!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
