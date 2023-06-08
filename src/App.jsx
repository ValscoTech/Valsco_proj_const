import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Form from "./components/Form";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import CarEmission from "./components/CarEmission";
import { DataProvider } from "./context/DataContext";
import Household from "./components/HouseHold";

function App() {
  return (
    <>
      <DataProvider>
        <UserAuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Landing />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/carform" exact element={<Form />} />
            <Route path="/caremission" exact element={<CarEmission />} />
            
            <Route path="/house" exact element={<Household />} />
          </Routes>
        </UserAuthContextProvider>
      </DataProvider>
    </>
  );
}

export default App;
