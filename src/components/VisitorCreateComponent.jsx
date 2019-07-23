import React, {Component} from 'react'

class VisitorCreateComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
         visitorName: '',
         phone: '',
         purpose: '',
         employeeId: null,
         email: '',
         items: [],
         isLoaded: false,
         items2: []
      };
      //this.handleChanges = this.handleChanges.bind(this);
      //this.clickButton = this.clickButton.bind(this);
      //this.addVisitor = this.addVisitor.bind(this);
  }
    componentDidMount(query) {
        return fetch('/failte/employee')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    clickButton (){
        console.log(this.state.visitorName);
        console.log(this.state.purpose);
        console.log(this.state.employeeId);
        console.log(this.state.phone);
        console.log(this.state.email);
        fetch('/failte/createappointment',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                visitorName: this.state.visitorName,
                purpose: this.state.purpose,
                employeeId: this.state.employeeId,
                phone: this.state.phone,
                email: this.state.email
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);

            });
        window.location = 'http://localhost:3000/message/';
        console.log("Appointment Added Successfully");
    }


    handleChanges(value) {
        fetch('/failte/search/employee/' + value)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items2: json,
                });
                this.setState({
                    employeeId: this.state.items2[0].employeeId
                });
                this.setState({
                    email: this.state.items2[0].email
                });
                console.log(this.state);
            }).catch(error => {
                //debugger;
                console.log(error);
            })
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    };

    render() {
    return (
        <div className="container">
          <div className='form-group'>
            <label>Visitor</label><br/>
            <input className="form-control" name="visitorName"
                   placeholder="Please enter your name..." onChange={(event) => this.handleChange(event)}/>
          </div>
          <div className='form-group'>
            <label>PhoneNumber</label>
            <input className="form-control" name="phone"
                   placeholder="Enter your phone number..." onChange={(event) => this.handleChange(event)}/>
          </div>
            <div className='form-group'>
                <div className="form-group">
                    <label>Reason for Visit:</label>
                    <select className="form-control" name="purpose" onChange={(event) => this.handleChange(event)}>
                        <option value="" name='purpose' disabled selected hidden>Please Choose...</option>
                        <option value="interview" name='purpose'>Interview</option>
                        <option value="delivery" name='purpose'>Delivery</option>
                        <option value="careers" name='purpose'>Careers</option>
                        <option value="maintenance" name='purpose'>Maintenance</option>
                        <option value="foodiefriday" name='purpose'>Foodie Friday</option>
                        <option value="Other" name='purpose'>Other</option>
                    </select>
                    <label>Employee to Meet:</label><br/>
                    <input  className="form-control" list="employees" name="employeeId" placeholder="Please Choose..." onChange={(event) => this.handleChanges(event.target.value)}/>
                    <datalist id="employees">
                        {this.state.items.map(item => (
                            <option key={item.id} value={item.employeeName}>{item.employeeId}</option>
                        ))}
                    </datalist>
                </div>
            </div>
          <div className='form-group'>
              <button className="btn btn-primary" onClick={this.clickButton.bind(this)}>Confirm</button>
          </div>
        </div>
    )
  }
}

export default VisitorCreateComponent