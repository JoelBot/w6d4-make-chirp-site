import React, { Component } from 'react'
import Chirp from '../components/Chirp'

class Chirps extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this) // This is boilerplate stuff for react that binds this
        this.enter = this.enter.bind(this)
        this.updateState = this.updateState.bind(this)
        this.updateChirps = this.updateChirps.bind(this)
        this.state = {
            newChirp: '',
            chirps: [],
            name: '',
            avatar: '' // chirps list that have already been added
        }
    }

    componentWillMount() {
        // console.log('mounting')
    }
    componentDidMount() {
        // fetch('https://nameless-cove-75673.herokuapp.com/user/me?api_token=' + sessionStorage.getItem('chirp_token'))
        // .then(response => response.json())
        // .then((response) => {
        //
        //   console.log(response)
        //   this.setState({
        //     avatar: 'https://nameless-cove-75673.herokuapp.com/' + response.user.avatar,
        //     name: response.user.name
        //   })
        // })
        fetch('https://nameless-cove-75673.herokuapp.com/posts')
        .then(response => response.json())
        .then(this.updateState)  // Sets state each API chirp get from /posts.  will need to post all chirps to backend so this will pick them up and display them.
        // .then(response => this.setState({chirps: response.posts}))  // Sets state each API chirp get from /posts.  will need to post all chirps to backend so this will pick them up and display them.
    }

    updateState(response){
        var chirps = response.posts.map((chirp) => {
            var avatar = ''
            if (chirp.avatar === undefined) {
                avatar = 'http://robohash.org/random'
            }
            else {
                avatar = chirp.avatar
            }

            var name = chirp.name
            var chirp = chirp.chirp

            return {
                avatar: avatar,
                name: JSON.stringify(name),
                chirp: chirp
            }
        })
        this.setState({
            chirps: chirps
        })
        console.log(this.state.chirps)
    }
    typing(e) {
        this.setState({
            newChirp: e.target.value
        })
    }
    enter(e) {
        if (e.key === 'Enter') {
            let updatedChirps = this.state.chirps
            updatedChirps.push({
                chirp: e.target.value
            })
            this.updateChirps(updatedChirps)
            console.log(this.state)
        }
    }

    updateChirps(updatedChirps) {
        fetch('https://nameless-cove-75673.herokuapp.com/posts', {
          body: JSON.stringify({
            chirp: this.state.newChirp,
            api_token: sessionStorage.getItem('chirp_token')
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => console.log())
        // .then(render())
        // this.setState({
        //     newChirp: '',
        //     chirps: updatedChirps
        // })
        // console.log(updatedChirps)
        // localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    render() {

        // console.log(this.state.avatar)
        var ChirpItems = this.state.chirps.map((chirp, i) => <div key={i}>
            <li className="list-group-item chirpitem">
            <div className="chirp-item-top-section">
                <img className ="av-logo" src={chirp.avatar} alt="" />
                <span><b>{chirp.email}</b></span>
            </div>
            <div>
            <p id="chirp-length">{chirp.chirp}</p>
            </div>
            </li>
        </div>
        )

        // var ChirpItems = this.state.chirps.map((chirp, i) => {
        //     return <Chirp data={chirp} key={i}/>})

            console.log(ChirpItems)
        return (
            <div className="input-group form-control">
                <input type="text" className="form-control" value={this.state.newChirp} onChange={this.typing} onKeyPress={this.enter} />
                <ul className="list-group">
                    {ChirpItems}
                </ul>
            </div>
        )
    }
}

export default Chirps
