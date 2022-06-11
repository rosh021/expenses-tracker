import { postUser } from "../../helper/axiosHelper";
import { setIsLoading, setResponse } from "./regLoginSlicer";

export const registerAction = async (form) => {
  setIsLoading(); //set the loader onn before the axios call
  const result = await postUser(form);
  // set the response after the get result from the axios and server in the 
  setResponse(result);
};
