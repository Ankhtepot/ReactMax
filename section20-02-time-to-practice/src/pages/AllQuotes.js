// import classes from './AllQuotes.module.css';

import QuoteList from '../components/quotes/QuoteList';

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
]

function AllQuotes(props) {
    return (
        <>
            <QuoteList quotes={DUMMY_QUOTES}/>
        </>
    );
}

export default AllQuotes;