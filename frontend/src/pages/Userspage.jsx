import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/userActions";
import Loader from "../components/Loader";

const Userspage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return users ?  (
    <div>
      {users.map((u) => (
        <h1 key={u.id}>{u.fullName}</h1>
      ))}
    </div>
  ) : <Loader/>
};

export default Userspage;
