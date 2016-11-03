import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.sendUserData = this.sendUserData.bind(this)
        this.state =  {
            name: '',
            email: '',
            password: '',
            avatar: ''
            }
    }

    sendUserData() {
        var data = new FormData()  // Check if append is needed here and place API calls here.
        // data.append('name', this.state.name)
        data.name = this.state.name
        data.email = this.state.email
        data.password = this.state.password
        data.avatar = this.state.avatar
        // data.append('email', this.state.email)
        // data.append('password', this.state.password)
        // data.append('avatar', this.state.avatar)
        console.log(data)
    }

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
        <input type="text" id="avatar" name="avatar" className="form-control" required onChange={(e) => this.setState({avatar:e.target.value})}/>
        </div>
        <div className="form-group">
        <div className="row">
        <div className="col-sm-6">
        <button type="button" onClick={this.sendUserData} id="signup" className="btn btn-success btn-block" >Signup!</button>
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
