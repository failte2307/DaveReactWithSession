import axios from 'axios'

class EmployeeDataService {
  retrieveAllEmployees () {
    return axios.get('http://localhost:8080/employees');
    // console.log('executed service');
  }
}

export default new EmployeeDataService()
