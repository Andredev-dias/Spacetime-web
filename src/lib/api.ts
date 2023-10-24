import axios from "axios";

export const api = axios.create({
  baseURL: "http://<endereco back end>:3333/",
});
