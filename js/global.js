import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Nav from '../components/Nav'
import MyProfile from '../components/MyProfile'


window.path = window.location.href.includes('github') ? '/w6d4-make-chirp-site' : ''

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={path + "/"} component={Home} />
        <Route path={path + "/signup"} component={Signup} />
        <Route path={path + "/signin"} component={Signin} />
        <Route path={path + "/myprofile"} component={MyProfile} />
    </Router>
    ,document.getElementById('chirp')
)
