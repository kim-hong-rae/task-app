import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchRandomUser = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("error :", error);
    throw error;
  }
};
