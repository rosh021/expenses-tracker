import { postUser } from "../../helper/axiosHelper";
import { setIsLoading, setResponse } from "./regLoginSlicer";

export const registerAction = (form) => async (dispatch) => {
  dispatch(setIsLoading()); //set the loader onn before the axios call
  const result = await postUser(form);
  // set the response after the get result from the axios and server in the
  dispatch(setResponse(result));
};
