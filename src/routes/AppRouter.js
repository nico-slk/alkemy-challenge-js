import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AppScreen from '../AppScreen';
import UserState from '../context/userContext';
import OperationState from '../context/operationContext';
import AuthRouter from './AuthRouter';

export default function AppRouter() {
    return (
        <Router >
            <div>
                <Switch>
                    <Route path='/auth' component={AuthRouter} />
                    <UserState>
                        <OperationState>
                            <Route exact path='/' component={AppScreen} />
                        </OperationState>
                    </UserState>
                    <Redirect to='/auth' />
                </Switch>
            </div>
        </Router>
    )
}
