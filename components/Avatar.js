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
          this.setState({
            avatar: response.user.avatar
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
