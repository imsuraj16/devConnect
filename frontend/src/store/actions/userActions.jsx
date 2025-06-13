import axios from "../../api/apiconfig";
import { setUsers, setCurrentUserId } from "../reducers/userSlice";

// Fetch all users from backend and update redux store
export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users");
    dispatch(setUsers(res.data));
  } catch (error) {
    console.error("Fetch Users Error:", error.message);
  }
};

// Add a new user to backend and then update redux store globally by fetching all users again
export const addUsers = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/users", user);
    
    dispatch(setCurrentUserId(res.data.id)); // update current user id if needed
    dispatch(fetchUsers()); // fetch fresh user list after adding new user
  } catch (error) {
    console.error("Add User Error:", error.message);
  }
};
