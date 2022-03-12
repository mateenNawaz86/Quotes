import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route
          path={`quotes/${params.quoteId}/comments`}
          element={<Comments />}
        />
      </Routes>
    </>
  );
};

export default QuoteDetail;
