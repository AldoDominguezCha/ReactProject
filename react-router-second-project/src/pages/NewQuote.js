import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from './../components/quotes/QuoteForm';

import useHttp from './../hooks/use-http';
import { addQuote } from './../lib/api';

const NewQuote = props => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.replace('/quotes');
        }
    }, [status, history]);
    
    const newQuoteHandler = quoteData => {
        sendRequest(quoteData);

        history.push('/quotes');
    };

    return <QuoteForm isLoading={status === 'pending'} onAddQuote={newQuoteHandler}/>;
};

export default NewQuote;