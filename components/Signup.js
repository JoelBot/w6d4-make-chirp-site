import React from 'react'

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
        // var data = new FormData()  // Check if append is needed here and place API calls here.
        // data.append('name', this.state.name)
        // data.name = this.state.name
        // data.email = this.state.email
        // data.password = this.state.password
        // data.avatar = this.state.avatar
        // data.append('email', this.state.email)
        // data.append('password', this.state.password)
        // data.append('avatar', this.state.avatar)
        // console.log(data)
//
        fetch('http://f5ebc883.ngrok.io/users', { // Update this
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                avatar: this.state.avatar
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(this.signedupHandler)
    }
    signedupHandler(response) {
        console.log(response) // this to see the token
        if (typeof response.user != 'undefined') {
            sessionStorage.setItem('chirp_token', response.user.api_token)

            window.location.href = '/chirp.html' // redirects after login update to displaying chirp
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

    //

    render() {
        return <div>
        <div className="row">
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
        <button type="button" id="cancelSignup" className="btn btn-primary btn-block">Cancel</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    }
}
export default Signup
