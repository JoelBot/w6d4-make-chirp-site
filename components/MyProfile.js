import React from 'react'
import { Link } from 'react-router'
import Nav from '../components/Nav'
import Avatar from '../components/Avatar'
import WhoToFollow from '../components/WhoToFollow'

class MyProfile extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>
                <Nav />
                <div className="container middle-section">
                    <div className="row">
                        <div className="col-sm-3">
                            <Avatar />
                            <div className="well">
                                <h3>#Trending TV Shows</h3>
                                <ul>
                                    <li>#Game of Thrones</li>
                                    <li>#Ballers</li>
                                    <li>#Walking Dead</li>
                                    <li>#Westworld</li>
                                </ul>
                            </div>
                        </div>
            <br />
            <div className="col-sm-6">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="What's Happening?" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Chirp</button>
                </span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">test</li>
                <li className="list-group-item">test</li>
                <li className="list-group-item">test</li>
                <li className="list-group-item">test</li>
              </ul>
                </div>

              <div className="col-sm-3 well">
                <WhoToFollow />
              </div>
            </div>
          </div>
          </div>

    }
}
export default MyProfile
