import React, { Component } from 'react'
import Chirp from '../components/Chirp'

class Chirps extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this) // This is boilerplate stuff for react that binds this
        this.enter = this.enter.bind(this)
        this.updateChirps = this.updateChirps.bind(this)
        // this.setLocalStorage = this.setLocalStorage.bind(this)

        this.state = {
            newChirp: '',
            chirps: []
        }
    }
    componentDidMount() {
        fetch('https://nameless-cove-75673.herokuapp.com/posts')
        .then(response => response.json())
        .then(response => this.setState({chirps: response.posts}))  // Sets state each API chirp get from /posts.  will need to post all chirps to backend so this will pick them up and display them.

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
    }

    render() {
        // var ChirpItems = this.state.chirps.map((chirp, i) => {
        //     return <Chirp data={chirp} key={i}/>})

        return (
            <div className="input-group form-control">
                <input type="text" className="form-control" value={this.state.newChirp} onChange={this.typing} onKeyPress={this.enter} />
                <ul className="list-group">
                    {this.state.chirps}
                </ul>
            </div>
        )
    }
}

export default Chirps
