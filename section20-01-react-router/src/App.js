import {Route} from 'react-router-dom';
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
                <Route path="/welcome">
                    <Welcome/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
                <Route path="/product-detail/:productId">
                    <ProductDetail/>
                </Route>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
