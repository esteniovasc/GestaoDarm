import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePresentation from "./pages/HomePresentation/HomePresentation";
import Login from "./pages/Login/Login";
import DashboardHome from "./pages/DashboardHome/DashboardHome";


function AppRoutes() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePresentation/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<DashboardHome/>}></Route>
        </Routes>
      </Router>
    )
  }
  
export default AppRoutes;