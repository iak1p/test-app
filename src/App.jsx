import "./App.css";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
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
