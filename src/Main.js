import React, { Component } from "react";
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="content"> 
                    <h1 style={{color: "#002855"}}>Access My Policy</h1>
                    <ul className="header">
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/signup">SignUp</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/forgotPassword" component={ForgotPassword}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;