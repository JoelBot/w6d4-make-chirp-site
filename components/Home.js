import React from 'react'
import { Link } from 'react-router'
import Nav from '../components/Nav'



class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return  <div>
                    <div id="homePage" className="row">
                        <div className="col-sm-12 text-center">
                            <img src="./img/chirp-logo.png" alt="Logo Pic" />
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/signin">
                            <button id="signin" type="button" className="btn btn-primary btn-block" >SignIn</button>
                            </Link>
                        </div>
                        <div className="col-sm-6">
                            <Link to="/signup">
                            <button id="signup" type="button" className="btn btn-success btn-block" >SignUp</button>
                            </Link>
                        </div>
                    </div>
                </div>

    }
}

export default Home
