import React from 'react'

class Avatar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            avatar : 'http://robohash.org/mani'
        }
    }
    componentDidMount(){
        fetch('http://f5ebc883.ngrok.io/users/me')
        .then(response => response.json())
        .then((response) => {

          console.log(response)
          this.setState({
            avatar: response.avatar
          })
        })
    }
    render(){
        return  <div className="well">
                    <img src={this.state.avatar} alt="user avatar" />
                </div>
    }
}
export default Avatar
