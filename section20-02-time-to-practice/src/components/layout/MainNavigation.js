import classes from './MainNavigation.module.css';
import {NavLink} from 'react-router-dom';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <NavLink activeClass={classes.active} to="/quotes" >All Quotes</NavLink>
                    <NavLink activeClass={classes.active} to="/new-quote" >Add a quote</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;