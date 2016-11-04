import React from 'react'

class Avatar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return  <div className="well">
                    <img src="http://robohash.org/mani" alt="" />
                </div>
    }
}
export default Avatar
