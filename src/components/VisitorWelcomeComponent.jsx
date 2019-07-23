import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class VisitorWelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: '',
      employeeId: 1,
      employeeName: '',
      visitorId: '',
      arrivalTime: '',
      items: [0],
      isLoaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.messageButtonClicked = this.messageButtonClicked.bind(this);
  }
  componentDidMount(query) {

    return fetch('/failte/employee/')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
  }

  clickButton (){
    console.log(this.state.visitorName)
    console.log(this.state.purpose);
    console.log(this.state.employeeName);
    console.log(this.state.visitorId);
    console.log(this.state.arrivalTime);
    fetch('/failte/createappointment',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        purpose: this.state.purpose,
        employeeName: this.state.employeeName,
        visitorId: this.state.visitorId,
        arrivalTime: this.state.arrivalTime
      })
    })
        .then(response => response.json())
        .then(response => {
          console.log(response);

        });
    window.location = 'http://localhost:3000/appointments/';
    console.log("Appointment Added Successfully");
  }

  messageButtonClicked(){
    if(this.state.message === ''){
      window.alert('Message field must not be empty. You must state who you are and why you are here! Please re-try:');
      this.setState({
        messageFailed: true
      })
    }else if(this.state.message.length > 50){
      window.alert('The message cannot be more than 50 characters in length!');
      this.setState({
        messageFailed: true
      })
    }
    else {
      window.alert('Message sent successfully! Please wait someone will be with you shortly!');
     
      
      this.setState({
        messageSent: true,
      });
      if(this.state.messageSent === true){
        window.location = 'http://localhost:3000/message/';
        
      
      }
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  render() {

    const {isLoaded} = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {

    return (
        <div className='container'>
          <form>
            <div className='form-group'>
              <div className="form-group">
                <label>Reason for Visit:</label>
                <select className="form-control" name="purpose">
                  <option value="" name='purpose' disabled selected hidden>Please Choose...</option>
                  <option value="interview" name='purpose'>Interview</option>
                  <option value="delivery" name='purpose'>Delivery</option>
                  <option value="careers" name='purpose'>Careers</option>
                  <option value="maintenance" name='purpose'>Maintenance</option>
                  <option value="foodiefriday" name='purpose'>Foodie Friday</option>
                  <option value="Other" name='purpose'>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Employee to Meet:</label><br/>
                <input  className="form-control" list="employees" name="employeeName" placeholder="Please Choose..."/>
                <datalist id="employees">
                {this.state.items.map(item => (
                  <option key={item.id} value={item.value}>{item.employeeName}</option>
                ))}
                </datalist>
              </div>
              <Link>
                <button className="btn btn-primary" onClick={this.clickButton}>Send Message</button>
              </Link>
            
            </div>
          </form>
        </div>
    );
  }
}
}

export default VisitorWelcomeComponent
