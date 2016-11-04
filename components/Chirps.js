import React, { Component } from 'react'
import Chirp from '../components/Chirp'

class Chirps extends Component {
    constructor(props) {
        super(props)
        this.typing = this.typing.bind(this) // This is boilerplate stuff for react that binds this
        this.enter = this.enter.bind(this)
        // this.markDone = this.markDone.bind(this)
        this.updateChirps = this.updateChirps.bind(this)
        this.state = {
            newChirp: '',
            chirps: [] // chirps list that have already been added
        }
    }

    componentWillMount() {
        console.log('mounting')
    }
    componentDidMount() {
        console.log('mounted')
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
                text: e.target.value
            })
            this.updateChirps(updatedChirps)
        }
    }

    updateChirps(updatedChirps) {
        this.setState({
            newChirp: '',
            chirps: updatedChirps
        })
        console.log(updatedChirps)
        // localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    render() {
        var ChirpItems = this.state.chirps.map((chirp, i) => {
            return <Chirp data={chirp} key={i}/>})

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
