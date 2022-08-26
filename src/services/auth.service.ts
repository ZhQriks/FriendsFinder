import axios from "axios";
import { APP_BACKEND_URL } from "../constants/constants";
import UserService from "./user.service";
class AuthService {
  login(email: string, password: string) {
    let userId: number;
    return axios
      .post(APP_BACKEND_URL + "login", { email, password })
      .then((response: any) => {
        UserService.getAllUsers()
          .then((response: any) => {
            userId = response.data.data.find(
              (user: any) => user.email === "eve.holt@reqres.in"
            ).id;
          })
          .catch((error: any) => {
            console.log(error);
          })
          .then(() => {
            console.log("it will be setted in ls");
            localStorage.setItem("user", JSON.stringify(userId));
            return response.data;
          });
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(email: string, password: string) {
    return axios
      .post(APP_BACKEND_URL + "register", {
        email,
        password,
      })
      .then((response: any) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.id));
        }
        return response.data;
      });
  }
}
export default new AuthService();
