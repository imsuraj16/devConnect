import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/userActions";
import Loader from "../components/Loader";

const Userspage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state)
  console.log(users);
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // return users ? (
  //   <div>
  //     {users.map((u) => (
  //       <h1 key={u.id}>{u.fullName}</h1>
  //     ))}
  //   </div>
  // ) : (
  //   <Loader />
  // );
};

export default Userspage;
