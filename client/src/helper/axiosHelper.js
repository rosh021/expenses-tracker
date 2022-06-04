import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:8000/api/v1";

const userEp = rootUrl + "/users";
const transactionEp = rootUrl + "/transaction";

export const postUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEp, usrObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (getUser) => {
  try {
    const { data } = await axios.post(userEp + "/login", getUser);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ============= transaction apis =================

export const postTransaction = async (transObj) => {
  try {
    const { data } = await axios.post(transactionEp, transObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
