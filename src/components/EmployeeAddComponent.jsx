import React, {Component} from 'react'

class EmployeeAddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departmentId: null,
            employeeName: '',
            telephoneNo: '',
            email: '',
            isLoaded: false,
            items: [],
        };
         // let validated = false;
         // let validEmployee = false;
        this.handleChange = this.handleChange.bind(this);
        this.employeeAdded = this.employeeAdded.bind(this);
        this.clickButton = this.clickButton.bind(this);
    }

    clickButton (){
        console.log(this.state.departmentId);
        console.log(this.state.employeeName);
        console.log(this.state.telephoneNo);
        console.log(this.state.email);
        fetch('/failte/createemployee',{

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                departmentId: this.state.departmentId,
                employeeName: this.state.employeeName,
                telephoneNo: this.state.telephoneNo,
                email: this.state.email

            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);

            });
        // this.employeeAdded();
        console.log("Employee Added Successfully");

}
    componentDidMount(query) {

        return fetch('/failte/departments/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
            
    }


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
          console.log(this.state);
    };
    


    handleChanges(value, nodeName) {
        if(value === 'Software Development') {
        this.setState({
           departmentId: 1,
           
        });
        }
        else if(value === 'Software Testing') {
            this.setState({
               departmentId: 2,
               
            });
            } 
         else if(value === 'Security') {
             this.setState({
                departmentId: 3,
                   
             });
            } 
        console.log(value, nodeName)
    }


    validate = (text) => {
        console.log(text);
        let regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\\.\w{2,3})+$/;
        if(regex.test(text) === this.state.email){
            console.log('Email is correct!');

            this.setState({email:text});
            return true;
        }else{
            alert('This email format is incorrect! Please re-enter:');
            this.setState({email:text});
            return false;
        }
    };

    validateEmail(email){
        let re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validateName(name){
        let validString = /^[a-zA-Z ]+$/
        return validString.test(String(name).toString());
    }
    display() {
        this.refs.departmentName.value = "";
        this.refs.employeeName.value = "";
        this.refs.telephoneNo.value = "";
        this.refs.email.value = "";
    }

    employeeAdded() {
        if(!this.validateName(this.state.employeeName)){
            window.alert('Employee Name can contain only letters!');
            this.setState({
                validEmployee:false
            })
        }
      /*  if (this.state.employeeId == null || this.state.departmentId == null || this.state.employeeName == '' || this.state.telephoneNo == '' || this.state.email == '') {
            window.alert('One or more fields are empty! They cannot be empty! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        } */
      /*  if (this.state.employeeId.length > 7) {
            window.alert('The employee id entered is too long. 7 digits or less! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        } */
      /*  if (this.state.departmentId.length > 7) {
            window.alert('The department id entered is too long. 7 digits or less! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        } */
        if (this.state.employeeName.length > 50) {
            window.alert('This name exceeds the maximum length allowed! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        }
        if (this.state.telephoneNo.length > 12) {
            window.alert('The phone number you entered is invalid! No more than 12 characters in length! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        }
        if (this.state.email.length > 30) {
            window.alert('The email you entered is invalid! No more than 30 characters in length! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        }
      /*  if (isNaN(this.state.employeeId)) {
            window.alert('The employee id you have entered is not a number. This input only accepts numeric values!');
            this.setState({
                validEmployee: false
            })
        } */
      /*  if (isNaN(this.state.departmentId)) {
            window.alert('The department id you have entered is not a number. This input only accepts numeric values!');
            this.setState({
                validEmployee: false
            })
        } */
        if (!this.validateEmail(this.state.email)) {
            window.alert('The email you entered is not a valid email! Please re-enter:');
            this.setState({
                validEmployee: false
            })
        }else{
            window.alert('Employee successfully added!');
            this.setState({
                validEmployee: true,
            })
        }

    }

    render() {

        const {isLoaded} = this.state;


    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {

        return (
            <div className="container">
                <div className='form-group'>
                <label>Department</label><br/>
                <input  className="form-control" ref="departmentName" list="departments" name="departmentId" placeholder="Please Choose..."  onChange={event => this.handleChanges(event.target.value, event.target.name)}/>
                <datalist id="departments">
                
                {this.state.items.map(item => (
                  <option value={item.departmentName}></option>
                ))}
                </datalist>
                </div> 
            
                <div className='form-group'>
                    <label htmlFor="employeeName">Employee Name</label>
                    <input className="form-control" ref="employeeName" type="text" name="employeeName" placeholder="Enter the Employee name you wish to add..." onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="telNumber">Telephone Number</label>
                    <input className="form-control" ref="telephoneNo" type="text" name="telephoneNo" placeholder="Enter the telephone number of the employee you wish to add..." onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input className="form-control" ref="email" type="email" name="email" placeholder="Enter the email address of the employee you wish to add..."
                           /*onChangeText={(text) => this.validate(text)}
                           value={this.state.email}*/ onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className='form-group'>
                    <button className="btn btn-primary" onClick={this.clickButton}>Confirm</button>
                </div>
            </div>
        )
    }
}
}

export default EmployeeAddComponent