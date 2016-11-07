import React from 'react'

class Avatar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            avatar : 'http://robohash.org/mani',
            name: ''
        }
    }
    componentDidMount(){
        fetch('https://nameless-cove-75673.herokuapp.com/user/me?api_token=' + sessionStorage.getItem('chirp_token'))
        .then(response => response.json())
        .then((response) => {
        //   console.log(response)
          var avatar = ''
          if (response.user.avatar === null) {
              avatar = 'http://robohash.org/random'
          }
          else {
              avatar = 'https://nameless-cove-75673.herokuapp.com/' + response.user.avatar
          }
          this.setState({
            avatar: avatar,
            name: response.user.name
          })
        })
    }
    render(){
        return  <div className="well text-center">
                    <img src={this.state.avatar} alt="" />
                    <h4>@{this.state.name}</h4>
                </div>
    }
}
export default Avatar
