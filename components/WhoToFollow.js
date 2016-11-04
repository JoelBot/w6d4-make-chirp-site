import React from 'react'

class WhoToFollow extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div>
        <ul className="list-group">
          <li className="list-group-item"><h3>Who to follow</h3></li>
          <li className="list-group-item">@Dwayne Johnson</li>
          <li className="list-group-item">@Kobe Bryant</li>
          <li className="list-group-item">@Michael Jordan</li>
          <li className="list-group-item">@Lebron James</li>
          <li className="list-group-item">@The Iron Yard</li>
        </ul>
        </div>
    }
}
export default WhoToFollow
