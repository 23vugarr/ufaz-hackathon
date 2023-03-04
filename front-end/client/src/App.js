import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard.page";
import Navbar from "./components/Navbar/Navbar.component";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
