import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/dbsoApp/";

class EmployeeService {
  createEmployee(cgGroupId, personal) {
    return axios.post(
      "http://localhost:8080/dbsoApp/add-associate-professional/" + cgGroupId,
      personal
    );
  }
  getAll() {
    return axios.get("http://localhost:8080/dbsoApp/get-professional-details");
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
}

export default new EmployeeService();
