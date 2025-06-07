import axios from "../../api/apiconfig";
import { getUser, loadUser } from "../reducers/userslice";

export const addUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    dispatch(loadUser(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchUser = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("/users");
    // console.log(res);

    dispatch(getUser(res.data));
  } catch (error) {
    console.log(error.message);
  }
};
