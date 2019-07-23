import React, {Component} from 'react'

class AppointmentsComponent extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      appointmentID: null,
      items: [],
    };
    this.signInClicked = this.signInClicked.bind(this);
    console.log(localStorage.getItem('eID'));
  }
  componentDidMount(query) {
    window.alert(this.props.employeeId);
    return fetch('/failte/employee/' + parseInt(localStorage.getItem('eID')) + '/appointments')
        //Select Mark in the demo
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
  }


  signInClicked() {
    this.props.history.push(`/employee/${this.props.match.params.name}/appointments`)
  }

  render() {
    // return (
    //     <EmployeeComponent empId={this.state.employeeId}/>
    // );
    return (
      <div className='container'>
      <table className='table'>
        <thead>
        <tr>
          <th>Visitor Name</th>
          <th>Purpose</th>
          <th>Arrival Time</th>
          <th>Sign In</th>
          <th>Sign Out</th>
        </tr>
        </thead>
        <tbody>
        {
         this.state.items.map((dynamicData) =>
         <tr className="trow"> <td> {dynamicData.visitorName}
         </td> <td> {dynamicData.purpose} </td>
         <td> {dynamicData.arrivalTime} </td>

         <td><button onClick={this.signInClicked}>Sign In</button></td>
         <td><button onClick={this.signOutClicked}>Sign Out</button></td>
         </tr>)
       }
        </tbody>
      </table>
      </div>
    );
  }
}



export default AppointmentsComponent
