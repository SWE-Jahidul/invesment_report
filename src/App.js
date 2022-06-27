import logo from "./logo.svg";
import "./App.css";
import Login from "./Component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Help from "./Component/Help";

function App() {
  return (
    // <div className="App" style={{ backgroundColor: "#333333" }}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="help" element={<Help />} />
    </Routes>
    // </div>
  );
}

export default App;
