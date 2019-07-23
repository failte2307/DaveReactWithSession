import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class VisitorSignInComponent extends Component {
  render() {
    return (
      <h3>Visitor has been signed in. <Link to="/">Click here</Link> to return home</h3>
    )
  }
}

export default VisitorSignInComponent
