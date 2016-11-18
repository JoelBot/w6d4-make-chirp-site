import React from 'react'
import { Link } from 'react-router'

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.signinHandler = this.signinHandler.bind(this)
        this.signedinHandler = this.signedinHandler.bind(this)
        this.enter = this.enter.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }
    signinHandler() {
      fetch('https://nameless-cove-75673.herokuapp.com/log_in', {
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(this.signedinHandler)
    }
    signedinHandler(response) {
      sessionStorage.setItem('chirp_token', response.user.api_token)
      window.location.href = '/myprofile'
    }
    enter(e) {
        if (e.key === 'Enter') {
            this.signinHandler()
        }
    }
    render() {
        return  <div className="row">
                <div className="col-sm-12 text-center">
                <h1 className="coolFont">Welcome to Chirp!</h1>
                </div>
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                    <label>Email</label>
                    <input id="signinEmail" type="email" name="email"  onChange={(e) => this.setState({email:e.target.value})} className="form-control" required/>
                  </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="signinPassword" type="password"  onChange={(e) => this.setState({password:e.target.value})} className="password" className="form-control" onKeyPress={this.enter} required/>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                  <Link to={path + "/"}>
                    <button type="button" className="btn btn-primary">Cancel</button>
                    </Link>
                    </div>
                  <div className="col-sm-6 text-right">
                    <button id="login" type="button" className="btn btn-success" onClick={this.signinHandler}>Login</button>
                  </div>
                </div>
              </div>
            </div>
    }
}
export default Signin
