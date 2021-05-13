import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import LoginScreen from '../components/LoginScreen';
import RegisterScreen from '../components/RegisterScreen';

export default function AuthRouter() {
    return (
        <div>
            <Router>
                <Switch >
                    <Route exact path='/auth/login' component={LoginScreen} />
                    <Route exact path='/auth/register' component={RegisterScreen} />
                    <Redirect to='/auth/login' />
                </Switch>
            </Router>
        </div>
    )
}
