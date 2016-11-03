import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
    </Router>
    ,document.getElementById('appContainer')
)
