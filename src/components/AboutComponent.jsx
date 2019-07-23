import React, {Component} from 'react'
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader,
  } from "mdbreact";

class AboutComponent extends Component {
  render () {
    return (
      <div className='container'>
        <br/>
        <MDBCard border="primary" className='container'  style={{ width: "40rem",  }}>
      <MDBCardHeader style={{ fontWeight: "bold", fontSize: "20px" }}>About The Company</MDBCardHeader>
      <MDBCardBody className="text-primary">
        <MDBCardTitle tag="h5">JRI-America</MDBCardTitle>
        <MDBCardText style={{color: "black", textAlign: "left"}}>
        JRI-America (JRI-A) provides IT services for SMBC Group and its entities from our offices in the Kerry Technology Park, Tralee, as part of a global IT team with centres also in New York and London. We support Sumitomo Mitsui Banking Corporation (SMBC); SMBC is Japan's second-largest bank and a Fortune Global 200 company which offers a broad range of financial services both within Japan and internationally. <br/> <br/>
    
        Since the Tralee office was established in 2011 we have grown rapidly, attracting both talented experienced staff as well as taking graduates and training them to develop into high quality professionals.   We look to continue to expand and strengthen our capability and to develop our next generation of IT developers, engineers, architects, analysts and administrators across the wide range of IT domains. <br/> <br/>       
    
        Our location provides our staff a unique blend, combining the challenge and excitement of true enterprise IT while maximising work life balance given our unique location. We are seeking talented, energetic and committed people to join our team to help us meet our ambitious objectives. <br/>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <br/>
      </div>
    )
  }
}

export default AboutComponent
