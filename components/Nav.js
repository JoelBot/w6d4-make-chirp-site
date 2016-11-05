import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
    constructor(props){
        super(props)
        this.signOut = this.signOut.bind(this)
    }
    signOut(){
        sessionStorage.removeItem('chirp_token')
        window.location.href = '/'
    }
    render(){
        return <nav className="navbar navbar-fixed-top navbar-default">
          <div className="container">
            <a className="navbar-brand" href="/myprofile">
            <img  src="./img/logo.png" alt="" /></a>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Messages</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><button type="button" className="btn btn-danger" onClick={this.signOut}>Logout</button></li>
              </ul>
              <form className="navbar-form text-center">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </nav>
    }
}

export default Nav
