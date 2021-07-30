import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/auth-slice";


const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    function logoutHandler() {
        dispatch(authActions.logout());
    }

    const navigationControls =
        isLoggedIn && (<>
            <nav>
                <ul>
                    <li>
                        <a href='/'>My Products</a>
                    </li>
                    <li>
                        <a href='/'>My Sales</a>
                    </li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            </nav>
        </>);

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {navigationControls}
        </header>);
};

export default Header;
