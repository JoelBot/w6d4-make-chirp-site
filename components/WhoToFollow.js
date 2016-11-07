import React from 'react'

class WhoToFollow extends React.Component {
    constructor(props){
        super(props)
        this.follow = this.follow.bind(this)
        this.idToken = this.idToken.bind(this)
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        fetch('https://nameless-cove-75673.herokuapp.com/users')
        .then(response => response.json())
        .then((response) => {this.setState({users: response.users})})
    }

    follow(){
        fetch('https://nameless-cove-75673.herokuapp.com/follow?api_token='+ sessionStorage.getItem('chirp_token'))
        // {
        //     body: JSON.stringify({
        //      id: data,
        //      api_token: sessionStorage.getItem('chirp_token')
        // }),
        // method: 'GET',
        // headers: {
        //     'Content-Type': 'application/json'
        // }
//     }
// )
    .then(response => response.json())
    .then(this.idToken)
}
idToken(response){
    console.log(response.user.id)
    sessionStorage.setItem('id_token', response.user.id)

}

    render(){
        var usersEmail = this.state.users.map((user, i) => (
            <li className="list-group-item" key={i}>
            <button className="btn btn-success" onClick={this.follow}>Follow</button>
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
