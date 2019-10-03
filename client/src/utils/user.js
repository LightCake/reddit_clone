import axios from "axios";

export const sign_up = data => {
  return axios.post("/api/user/signup", data);
};
