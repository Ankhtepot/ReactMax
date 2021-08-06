import {Redirect, Route, Switch} from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Products from './components/pages/Products';
import MainHeader from './components/MainHeader/MainHeader';
import ProductDetail from './components/pages/ProductDetail';

function App() {
    return (
        <div>
            <header>
                <MainHeader />
            </header>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/welcome"/>
                    </Route>
                    <Route path="/welcome" component={Welcome}/>
                    <Route path="/products/:productId" component={ProductDetail}/>
                    <Route path="/products" component={Products}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
