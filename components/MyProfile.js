import React from 'react'
import { Link } from 'react-router'
import Nav from '../components/Nav'
import Avatar from '../components/Avatar'
import WhoToFollow from '../components/WhoToFollow'
import Chirps from '../components/Chirps'

class MyProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Followers: '',
            Following: '',
            Chirps: '',
        }
    }
    componentDidMount(){
        fetch('https://nameless-cove-75673.herokuapp.com/user/me?api_token=' + sessionStorage.getItem('chirp_token'))
        .then(response => response.json())
        .then((response) => {
            this.setState({
                Followers: response.user.followers_count,
                Following: response.user.followees_count,
                Chirps: response.user.posts.length
            })
        })
    }
    render(){

        return <div>
                <Nav />
                <div className="container middle-left-section">
                    <div className="row">
                        <div className="col-sm-3">
                            <Avatar />
                            <div className="well">
                                <h3>Chirp Stats</h3>
                                <ul>
                                    <li>Followers:<span className="badge">{this.state.Followers}</span></li>
                                    <li>Following:<span className="badge">{this.state.Following}</span></li>
                                    <li>Chirps:<span className="badge">{this.state.Chirps}</span></li>
                                </ul>
                            </div>
                        </div>
            <br />
            <div className="col-sm-6 timeline">
                <Chirps />
            </div>
              <div className="col-sm-3 well timeline">
                <WhoToFollow />
              </div>
            </div>
          </div>
          </div>

    }
}
export default MyProfile
