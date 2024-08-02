import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import { Router } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
     <AllRoutes/>
     <Footer/>
    </div>



  );
};

export default App;
