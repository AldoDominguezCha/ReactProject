import { Fragment, useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from './../components/quotes/HighlightedQuote';
import Comments from './../components/comments/Comments';
import LoadingSpinner from './../components/UI/LoadingSpinner';

import useHttp from './../hooks/use-http';
import { getSingleQuote } from './../lib/api';



const QuoteDetail = (props) => {
  const match = useRouteMatch();
  const routeParams = useParams();

  const { quoteId } = routeParams;
  
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if(status === 'pending') {
    return <div className="centered">
      <LoadingSpinner />
    </div>
  }

  if(error) {
    return <p className="centered">{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>The quote could not be found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Comments for the quote</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
