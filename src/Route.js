import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePresentation from "./pages/HomePresentation/HomePresentation";
import Login from "./pages/Login/Login";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import Schedules from "./pages/Schedules/Schedules";
import Tasks from "./pages/Tasks/Tasks";
import ProjectsList from "./pages/ProjectsList/ProjectsList";
import ProjectView from "./pages/ProjectView/ProjectView";
import Teams from "./pages/Teams/Teams";
import Dashboard from "./pages/Dashboard/Dashboard";


function AppRoutes() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePresentation/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/dashboard" element={<DashboardHome/>}></Route>
            <Route path="/schedules" element={<Schedules/>}></Route>
            <Route path="/tasks" element={<Tasks/>}></Route>
            <Route path="/projectslist" element={<ProjectsList/>}></Route>
            <Route path="/projectview/:id" element={<ProjectView/>}></Route>
            <Route path="/teams" element={<Teams/>}></Route>

            <Route path="/teste" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    )
  }
  
export default AppRoutes;