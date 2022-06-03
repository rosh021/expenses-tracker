import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1/users"
    : "http://localhost:8000/api/v1/users";

export const postUser = async (usrObj) => {
  try {
    const { data } = await axios.post(apiURL, usrObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
