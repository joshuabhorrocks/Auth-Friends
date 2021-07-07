import axios from "axios";

export function axiosWithAuth () {
  // returns an "instance" of axios, with preconfigured configs
  const token = localStorage.getItem("token")
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: `${token}`
    },
  });
};