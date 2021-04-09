import axios from "axios";

const PERSONAL_API_BASE_URL = "http://localhost:8080/dbsoApp/";

class PersonalService {
  createPersonal(associatePersonal) {
    return axios.post(
      PERSONAL_API_BASE_URL + "add-associate-personal",
      associatePersonal
    );
  }
  getAllAssociates() {
    return axios.get(PERSONAL_API_BASE_URL + "get-personal-details");
  }

  getById(cgGroupId) {
    return axios.get(PERSONAL_API_BASE_URL + "/" + cgGroupId);
  }

  updatePersonal(personal, cgGroupId) {
    return axios.put(PERSONAL_API_BASE_URL + "/update/" + cgGroupId, personal);
  }
}

export default new PersonalService();
