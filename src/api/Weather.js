import axios from "axios";
import { PATH_URL } from "../utils/constants";

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

export const getCountryApi = async (countryId) => {
  try {
    const { data } = await axiosInstance.get(`/location/${countryId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
