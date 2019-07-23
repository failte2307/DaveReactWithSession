import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class MessageComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Message_id: null,
      Message_content: null,
      Message_time: null,
      Employee_Id: null,
      Visitor_Id: null
    } 
  }
  render() {

    return (
        
        <h2>Message has been sent click <Link to="/">here</Link> to return home</h2>
    )
  }
}

export default MessageComponent
