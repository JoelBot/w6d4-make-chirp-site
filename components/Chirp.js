import React, { Component } from 'react' // Ask what this is if you remember to
// nothing else to import because this is the children

const Chirp = (props) => <li className="list-group-item chirpitem">
                            <div className="chirp-item-top-section">
                                <img className ="av-logo" src="" alt="" />
                                <span><b>{props.data.user.name}</b></span>
                            </div>
                            <div>
                            <span>{props.data.chirp}</span>
                            </div>
                            </li>

export default Chirp
