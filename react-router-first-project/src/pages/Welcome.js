import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

const Welcome = () => {
    return (
        <Fragment>
            <h1>The welcome page!</h1>
            <Route path="/welcome/new-user">
                <p>You are a new user, aren't you?</p>
            </Route>
        </Fragment>
    )
};

export default Welcome;