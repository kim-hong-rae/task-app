import axios from "axios";

export const fetchRandomUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=12");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
