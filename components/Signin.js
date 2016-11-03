import React from 'react'

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.logIn = this.logIn.bind(this)
        this.state = {
            email: '',
            password: ''
        }
    }
    logIn() {
      var data = new FormData()
      data.append('email', this.state.email)
      data.append('password', this.state.password)
    }
    render() {
        return  <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                    <label>Email</label>
                    <input id="emailSignIn" type="email" name="email"  onChange={(e)=>this.setState({email:e.target.value})} className="form-control" required/>
                  </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="forgotPassword" type="password"  onChange={(e)=>this.setState({password:e.target.value})} className="password" className="form-control" required/>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <a href="#">Forget Password?</a>
                  </div>
                  <div className="col-sm-6 text-right">
                    <button id="login" type="button" className="btn btn-success" onClick={this.logIn}>Login</button>
                  </div>
                </div>
              </div>
            </div>
    }
}

export default Signin
