import axios from "axios";

const CORS_URL = "https://api.allorigins.win/raw?url=";

const PATH_URL = `${CORS_URL}https://www.metaweather.com/api`;

const axiosInstance = axios.create({
  baseURL: PATH_URL,
  withCredentials: false,
});

export const getCountriesApi = async (country) => {
  try {
    const { data } = await axiosInstance.get(
      `/location/search/?query=${country}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
