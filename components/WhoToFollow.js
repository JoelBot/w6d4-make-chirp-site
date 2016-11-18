import React from 'react'

class WhoToFollow extends React.Component {
    constructor(props){
        super(props)
        this.follow = this.follow.bind(this)
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        fetch('https://nameless-cove-75673.herokuapp.com/users?api_token=' + sessionStorage.getItem('chirp_token') )
        .then(response => response.json())
        .then(response => this.setState({users: response.users}))
    }

    follow(id, userIndex){
        var users = this.state.users
        var endPoint = users[userIndex].following ? '/unfollow' : '/follow'
        fetch('https://nameless-cove-75673.herokuapp.com' + endPoint + '?api_token=' + sessionStorage.getItem('chirp_token') + '&id=' + id)
        .then(response => response.json())
        .then(response => {
            users[userIndex].following = !users[userIndex].following
            this.setState({
                users: users
            })
        })
    }


    render(){
        var usersEmail = this.state.users.map((user, i) => (
            <li className="list-group-item" key={i}>
            <button onClick={() => this.follow(user.id, i)} className={user.following?"btn btn-danger":"btn btn-success"}>{user.following?'Unfollow':'Follow'}</button>
                {user.email}
            </li>
        ))
        return <div>
        <ul className="list-group ">
          <li className="list-group-item"><h3>Who to follow</h3></li>
          {usersEmail}
        </ul>
        </div>
    }
}
export default WhoToFollow
