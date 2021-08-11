import {Redirect, Route, Switch} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes"/>
                    </Route>
                    <Route path="/quotes/:quoteId" component={QuoteDetail}/>
                    <Route path="/quotes" component={AllQuotes}/>
                    <Route path="/new-quote" component={NewQuote}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
