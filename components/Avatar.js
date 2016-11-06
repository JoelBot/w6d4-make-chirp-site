import React from 'react'

class Avatar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            avatar : 'http://robohash.org/mani'
        }
    }
    componentDidMount(){
        fetch('https://nameless-cove-75673.herokuapp.com/user/me?api_token=' + sessionStorage.getItem('chirp_token'))
        .then(response => response.json())
        .then((response) => {

          console.log(response)

          var avatar = ''
          if (response.user.avatar === null) {
              avatar = 'http://robohash.org/random'
          }
          else {
              avatar = 'https://nameless-cove-75673.herokuapp.com/' + response.user.avatar
          }

          this.setState({
            avatar: avatar
          })
        })
    }
    render(){
        return  <div className="well">
                    <img src={this.state.avatar} alt="" />
                </div>
    }
}
export default Avatar
