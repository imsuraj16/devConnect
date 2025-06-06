import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/userActions";
import Loader from "../components/Loader";

const Userspage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  // console.log(user);
  

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return user ? <div>

    {user.map((u)=>(
      <li key={u.id}>{u.fullName}</li>
    ))}
  </div> : <Loader/>
};

export default Userspage;
