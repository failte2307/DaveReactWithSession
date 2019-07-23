import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const divStyle = {
  color: 'white'
};

class HeaderComponent extends Component {
  render() {
    return (
      <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <ul className='navbar-nav'>
          <li className='nav-link' style={divStyle}><Link to='/' style={divStyle}>Home</Link></li>
        </ul>
      </nav>
    </header>
    )
  }
}

export default HeaderComponent
