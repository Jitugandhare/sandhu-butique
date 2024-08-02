import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import { Router } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
     <AllRoutes/>
    </div>



  );
};

export default App;
