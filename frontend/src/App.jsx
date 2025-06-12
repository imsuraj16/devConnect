import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { fetchUsers } from "./store/actions/userActions";
import { useDispatch } from "react-redux";


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="w-full h-full">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
