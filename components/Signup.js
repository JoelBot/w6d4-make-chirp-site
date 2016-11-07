import React from 'react'
import { Link } from 'react-router'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.signupPost = this.signupPost.bind(this)
        this.signedupHandler = this.signedupHandler.bind(this)
        this.state =  {
            name: '',
            email: '',
            password: '',
            avatar: ''
            }
    }

    signupPost() {
        var data = new FormData()
        data.append('avatar', this.state.avatar)
        data.append('name', this.state.name)
        data.append('email', this.state.email)
        data.append('password', this.state.password)

        fetch('https://nameless-cove-75673.herokuapp.com/users', { // Update this
                method: 'POST',
                body: data
        })
        .then(response => response.json())
        .then(this.signedupHandler)
    }
    signedupHandler(response) {
        console.log(response) // this to see the token
        if (typeof response.user != 'undefined') {
            sessionStorage.setItem('chirp_token', response.user.api_token)

            window.location.href = '/myprofile' // redirects after login update to displaying chirp
        }
        else {
            response.forEach(function(error) {
                var errorDiv = document.createElement('div')
                errorDiv.classList.add('alert', 'alert-danger')
                errorDiv.innerHTML = error
                document.querySelector('#errors').appendChild(errorDiv)
            })
        }
    }
    render() {
        return <div>
        <div className="row">
        <div className="col-sm-12 text-center">
        <h1 className="coolFont">Welcome to Chirp!</h1>
        </div>
        <div className="col-sm-6 col-sm-offset-3">

        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="form-control" required onChange={(e) => this.setState({name:e.target.value})}/>
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="form-control" required onChange={(e) => this.setState({email:e.target.value})}/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="form-control" required onChange={(e) => this.setState({password:e.target.value})}/>
        </div>
        <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input type="file" id="avatar" name="avatar" className="form-control" required onChange={(e) => this.setState({avatar:e.target.files[0]})}/>
        </div>
        <div className="form-group">
        <div className="row">
        <div className="col-sm-6">
        <button type="button" onClick={this.signupPost} id="signup" className="btn btn-success btn-block" >Signup!</button>
        </div>
        <div className="col-sm-6">
        <Link to="github.io/w6d4-make-chirp-site/">
        <button type="button" id="cancelSignup" className="btn btn-primary btn-block">Cancel</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    }
}
export default Signup
