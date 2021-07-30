import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const CartButton = (props) => {
    // const itemsAmount = useSelector(state => state.cart.itemsAmount);
    const itemsTotal = useSelector(state => state.cart.itemsTotal);

    const dispatch = useDispatch();

    function cartButtonClickHandler() {
        dispatch(cartActions.toggleShow());
    }

    return (
        <button className={classes.button} onClick={cartButtonClickHandler}>
            <span>My Cart</span>
            {/*<span className={classes.badge}>{itemsAmount}$</span>*/}
            <span className={classes.badge}>{itemsTotal}</span>
        </button>
    );
};

export default CartButton;
