import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from '../components/Home'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Nav from '../components/Nav'
import MyProfile from '../components/MyProfile'

const path = window.location.href.includes(('github') ? '/w6d4-make-chirp-site/' : '/')

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="github.io/w6d4-make-chirp-site/" component={Home} />
        <Route path="github.io/w6d4-make-chirp-site/signup" component={Signup} />
        <Route path="github.io/w6d4-make-chirp-site/signin" component={Signin} />
        <Route path="github.io/w6d4-make-chirp-site/myprofile" component={MyProfile} />
    </Router>
    ,document.getElementById('chirp')
)
