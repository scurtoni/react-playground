//import models from "@models";
import axios, {AxiosInstance} from "axios";

const API_ROOT = "https://swapi.dev/api/";

const api: AxiosInstance = axios.create({
  baseURL: API_ROOT,
  headers: {
    "content-type": "application/json",
    accept: "application/json"
  }
});

const instance = {
  getPeople: async (): Promise<any> => {
    return await api.get(`people/`).then(({data}) => {
      return data.data;
    });
  },
  getPerson: async (id: number): Promise<any> => {
    return await api.get(`people/${id}/`).then(({data}) => {
      return data.data;
    });
  },
  getPlanet: async (id: number): Promise<any> => {
    return await api.get(`planet/${1}/`).then(({data}) => {
      return data.data;
    });
  },
  getStarship: async (id: number): Promise<any> => {
    return await api.get(`starship/${id}/`).then(({data}) => {
      return data.data;
    });
  }
};

export default instance;
