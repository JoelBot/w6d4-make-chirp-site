import React, { Component } from 'react' // Ask what this is if you remember to
// nothing else to import because this is the children

const Chirp = (props) => <li className="list-group-item list-group-item-info">
    <span>{props.data.chirp}</span>
    </li>

export default Chirp
