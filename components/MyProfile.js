import React from 'react'
import { Link } from 'react-router'
import Nav from '../components/Nav'
import Avatar from '../components/Avatar'
import WhoToFollow from '../components/WhoToFollow'
import Chirps from '../components/Chirps'

class MyProfile extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>
                <Nav />
                <div className="container middle-left-section">
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
                <Chirps />

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
