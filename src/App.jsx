import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginComponent from "./components/login/LoginComponent";
import HomePageComponent from "./components/HomePage/HomePageComponent";
import SignupComponent from "./components/Signup/SignupComponent";

import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/Login" element={<LoginComponent />} />
          <Route path="/Signup" element={<SignupComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
