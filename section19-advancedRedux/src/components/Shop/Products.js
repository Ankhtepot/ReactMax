import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useSelector} from "react-redux";

const Products = (props) => {
    const products = useSelector(state => state.products.items);

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map(product => {
                    return <ProductItem title={product.title}
                                        price={product.price}
                                        description={product.description}
                                        id={product.id}
                                        key={product.id}
                    />
                })}
                {/*<ProductItem*/}
                {/*    title='Test'*/}
                {/*    price={6}*/}
                {/*    description='This is a first product - amazing!'*/}
                {/*/>*/}
            </ul>
        </section>
    );
};

export default Products;
