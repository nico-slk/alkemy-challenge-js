import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AppScreen from '../AppScreen';
import UserState from '../context/userContext';
import AuthRouter from './AuthRouter';

export default function AppRouter() {
    return (
        <Router >
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <UserState>
                        <Route exact path='/' component={AppScreen} />
                    </UserState>
                    <Redirect to='/auth' />
                </Switch>
            </div>
        </Router>
    )
}
