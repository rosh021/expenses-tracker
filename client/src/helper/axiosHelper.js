import axios from "axios";

const rootUrl = "https://et-fullstack.herokuapp.com/api/v1";

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

export const getTransaction = async (transObjs) => {
  try {
    const { data } = await axios.get(transactionEp, {
      headers: {
        Authorization: transObjs,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteTransaction = async (ids) => {
  console.log(ids);
  try {
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));

    const { data } = await axios.delete(transactionEp, {
      headers: {
        Authorization: _id,
      },
      data: ids,
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
