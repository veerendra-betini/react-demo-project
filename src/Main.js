import React, { Component } from "react";
import { Route, NavLink, Switch, HashRouter, Redirect } from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content">
                    <h1 style={{ color: "#002855" }}>Access My Policy</h1>
                    <ul className="header">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">SignUp</NavLink></li>
                    </ul>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Login} >
                                <Redirect to="/login" />
                            </Route>
                            <Route path="/login" component={Login} ></Route>
                            <Route path="/signup" component={Signup} />
                            <Route path="/forgotPassword/:loginUser" component={ForgotPassword} />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;