import React from 'react'

class WhoToFollow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
        }
    }
    componentDidMount(){
        fetch('https://nameless-cove-75673.herokuapp.com/users')
        .then(response => response.json())
        .then((response) => {this.setState({users: response.users})})
    }

    render(){
        var usersEmail = this.state.users.map((user, i) => (
            <li className="list-group-item" key={i}>
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
