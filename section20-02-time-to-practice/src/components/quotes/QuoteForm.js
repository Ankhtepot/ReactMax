import {useRef, useState} from 'react';

import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import Card from '../UI/Card';
import {Prompt} from 'react-router-dom';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  function finishEnteringHandler() {
    setIsEntering(false);
  }

  const formFocusHandler = () => {
      setIsEntering(true);
  };

  return (
      <>
        <Prompt when={isEntering} message={(location) => 'Are you sure you want to leave? All your entered data will be lost.'}/>
        <Card>
        <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
              <div className={classes.loading}>
                <LoadingSpinner/>
              </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">Add Quote</button>
          </div>
        </form>
      </Card></>
  );
};

export default QuoteForm;
