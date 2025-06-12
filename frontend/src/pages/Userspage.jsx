import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions/userActions";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Userspage = () => {
  
  const users = useSelector((state) => state.user.users);
  // console.log(users);

  return users ? (
    <div className="p-4 flex gap-[4rem]">
      {users.map((u) => (
        <div className="bg-amber-400 p-5">
          <h1>{u.fullName}</h1>
          <Link to={`/users/projects/${u.id}`} className="bg-blue-300 px-[2rem] py-1 rounded-md">See Projects</Link>
        </div>
      ))}
    </div>
  ) : (
    <Loader />
  );
};

export default Userspage;
