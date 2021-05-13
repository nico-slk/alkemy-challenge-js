import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AppScreen from '../AppScreen';
import AuthRouter from './AuthRouter';

export default function AppRouter() {
    return (
        <Router >
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <Route exact path='/' component={AppScreen} />
                    <Redirect to='/auth' />
                </Switch>
            </div>
        </Router>
    )
}
