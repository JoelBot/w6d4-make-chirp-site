import React from 'react'

class Signin extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return  <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                    <div className="form-group">
                    <label>Email</label>
                    <input id="emailSignIn" type="text" name="email" className="form-control" required/>
                  </div>

                <div className="form-group">
                    <label>Password</label>
                    <input id="forgotPassword" type="password" className="password" className="form-control" required/>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <a href="#">Forget Password?</a>
                  </div>
                  <div className="col-sm-6 text-right">
                    <button id="login" type="button" className="btn btn-success">Login</button>
                  </div>
                </div>
              </div>
            </div>
    }
}

export default Signin
