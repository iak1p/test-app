import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("../users.json", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((users) => {
        dispatch({
          type: "SET_USERS",
          payload: users,
        });
      });
  }, []);

  return (
    <>
      <div className="app">
        <LeftSidebar />
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
