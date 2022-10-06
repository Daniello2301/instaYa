import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginComponent from "./components/login/LoginComponent";
import HomePageComponent from "./components/HomePage/HomePageComponent";
import ListEnvios from './components/Envíos/ListEnvios'
import Regorder from "./components/RegOrder/Regorder";
import EditEnvio from "./components/EditEnvio/EditEnvio";
import SignUp from "./components/Signup/SignupComponent";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/HomePage" element={<HomePageComponent/>} />
          <Route path="/Sends" element={<ListEnvios />} />
          <Route path="/Login" element={<LoginComponent />} />
          <Route path="/NewSend" element={<Regorder/>} />
          <Route path="/EditSend" element={<EditEnvio/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
