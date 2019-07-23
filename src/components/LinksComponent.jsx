import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class LinksComponent extends Component {
  render() {
    return (
      <div className='container' style={{textAlign: 'right', marginBottom: '60px'}}>
        <Link to='/employee'>Employee Portal</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/about'>About Us</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/addEmployee'>AddEmployee</Link>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/delEmp'>DeleteEmployee</Link>
      </div>
    )

  }
}

export default LinksComponent
