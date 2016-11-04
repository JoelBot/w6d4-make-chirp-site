import React, { Component } from 'react' // Ask what this is if you remember to
// nothing else to import because this is the children

const Chirp = (props) => <div className="row">
    <div className="col-sm-12">
    <span>{props.data.text}</span>
    </div>
    </div>

export default Chirp
