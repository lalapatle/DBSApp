import axios from "axios";

const BASE_URL = "http://localhost:8080/dbsoApp/";

class LoginService {
  getCredetialById(cgGroupId) {
    return axios.get(BASE_URL + "get-credentials-by-id/" + cgGroupId);
  }
  signIn(login) {
    return axios.post(BASE_URL + "login", login);
  }
}

export default new LoginService();
