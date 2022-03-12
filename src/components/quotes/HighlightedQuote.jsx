import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
  return (
    <figure className={classes.quote}>
      <p>
        <i className="fa-solid fa-quote-left" />
        {props.text}
        <i className="fa-solid fa-quote-right" />
      </p>

      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
