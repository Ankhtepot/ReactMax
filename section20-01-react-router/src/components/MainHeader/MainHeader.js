import classes from './MainHeader.module.css';
import {NavLink} from 'react-router-dom';

function MainHeader(props) {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainHeader;