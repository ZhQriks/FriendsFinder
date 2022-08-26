import axios from "axios";
import { APP_BACKEND_URL } from "../constants/constants";
import { IUserInterface } from "../type/users";

class UserService {
  getAllUsers() {
    //Getting all users list from API
    return axios.get(APP_BACKEND_URL + `users?per_page=12&page=1`);
  }
  getUser(id: number) {
    //Getting user by id from API
    return axios.get<IUserInterface>(APP_BACKEND_URL + `users/${id}`);
  }
}

export default new UserService();
