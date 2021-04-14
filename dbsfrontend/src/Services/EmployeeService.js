import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/dbsoApp/";

class EmployeeService {
  createEmployee(cgGroupId, personal) {
    return axios.post(
      EMPLOYEE_API_BASE_URL + "add-associate-professional/" + cgGroupId,
      personal
    );
  }
  getAll() {
    return axios.get(EMPLOYEE_API_BASE_URL + "get-professional-details");
  }

  getById(sno) {
    return axios.get(EMPLOYEE_API_BASE_URL + "get-professional-by-id/" + sno);
  }

  updateEmployee(sno, personal) {
    return axios.put(
      EMPLOYEE_API_BASE_URL + "updateProfessional/" + sno,
      personal
    );
  }
  getReport() {
    return axios.get(EMPLOYEE_API_BASE_URL + "generateReport");
  }

  deleteAssociate(sno){
    return axios.delete(EMPLOYEE_API_BASE_URL+"deleteAssociate/"+sno);
  }

  getByCgId(cgGroupId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "get-professional-by-cgGroupId/" + cgGroupId);
  }
}

export default new EmployeeService();
