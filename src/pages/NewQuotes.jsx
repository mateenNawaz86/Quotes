import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const history = useNavigate();

  const addQuoteHandler = (quote) => {
    console.log(quote);

    history("/quotes");
  };
  return (
    <>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};

export default NewQuotes;
