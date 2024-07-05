import axios from "axios";
import { RegisterUser } from "../page/register/Register";
import { UpdatePassword } from "../page/update_password/UpdatePassword";

const axiosInstance = axios.create({
  baseURL: "http://124.221.139.111:3000/",
  timeout: 3000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return error.response;
  }
);

export async function login(username: string, password: string) {
  return await axiosInstance.post("/user/login", {
    username,
    password,
  });
}

export async function registerCaptcha(email: string) {
  return await axiosInstance.get("/user/register-captcha", {
    params: {
      address: email,
    },
  });
}

export async function register(registerUser: RegisterUser) {
  return await axiosInstance.post("/user/register", registerUser);
}

export async function updatePasswordCaptcha(email: string) {
  return await axiosInstance.get("/user/update-password/captcha", {
    params: {
      address: email,
    },
  });
}

export async function updatePassword(data: UpdatePassword) {
  return await axiosInstance.post("/user/update-password", data);
}
