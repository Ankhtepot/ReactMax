import {Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {useAuth} from './store/auth-context';

function App() {
    const authContext = useAuth();

    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                {!authContext.isLoggedIn &&
                <Route path="/auth">
                    <AuthPage/>
                </Route>}
                <Route path="/profile">
                    {authContext.isLoggedIn && <UserProfile/>}
                    {!authContext.isLoggedIn && <Redirect to='/auth'/>}
                </Route>
                <Route path='*'>
                    <Redirect to='/' />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;