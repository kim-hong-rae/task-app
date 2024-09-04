import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchRandomUser = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("데이터를 불러오는 중에 에러가 발생했습니다.", error);

    let errorMessage = "예상치 못한 에러가 발생했습니다. 다시 시도해주세요.";

    if (axios.isAxiosError(error)) {
      if (error.response) {
        errorMessage = `서버 에러: ${error.response.status} - ${
          error.response.data.message || error.message
        }`;
      } else if (error.request) {
        errorMessage = "서버로부터 받은 응답이 없습니다.";
      } else {
        errorMessage = `에러: ${error.message}`;
      }
    }

    alert(errorMessage);
    throw error;
  }
};
