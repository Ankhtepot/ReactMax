// import classes from './QuoteDetail.module.css';
import {Route, useParams} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Petr',
        text: 'Learning React is fun!'
    },
    {
        id: 'q2',
        author: 'Petrklic',
        text: 'Learning React is great!'
    }
];

function QuoteDetail(props) {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(q => q.id === params.quoteId);

    if (!quote) {
        return <p>No Quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path="/quotes/:quoteId/comments" component={Comments}/>
        </>
    );
}

export default QuoteDetail;