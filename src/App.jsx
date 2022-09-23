import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginComponent from "./components/login/LoginComponent";
import HomePageComponent from "./components/HomePage/HomePageComponent";
import ListEnvios from './components/Envíos/ListEnvios'

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/Sends" element={<ListEnvios />} />
          <Route path="/Login" element={<LoginComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
