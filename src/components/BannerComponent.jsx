import React, {Component} from 'react'

class BannerComponent extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <h1>Failte Welcome Centre</h1>
          <img id="logo" src="/logo.png" alt='Company Logo'/>
        </div>
      </>
    )
  }
}

export default BannerComponent
