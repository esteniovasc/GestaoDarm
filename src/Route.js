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
import { useState, useEffect } from 'react';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AccessDenied from "./pages/AccessDenied/AccessDenied";
import Error404 from "./pages/Error404/Error404";
import UserProfile from "./pages/UserProfile/UserProfile";
import './Route.css'

function AppRoutes() {

  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      console.log('Stored User:', storedUser);
      
      setTimeout(() => {
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
    
        setLoading(false);
      }, 1500)

    }, []);

    if (loading) {
      return (
        <div className="loadingOverlay">
          <div className="loadingContent">
            <img src="/loading.gif" alt="Loading" />
            <p>Carregando...</p>
          </div>
        </div>
      );
    }


    return (
      <Router>
    
        <Routes>
            <Route path="/" element={<HomePresentation/>}></Route>

            <Route path="/login" element={<Login setUser={setUser}/>}></Route>
            
            <Route path="/dashboard" element={<ProtectedRoute user={user}><DashboardHome/></ProtectedRoute>}></Route>
            <Route path="/schedules" element={<ProtectedRoute user={user}><Schedules/></ProtectedRoute>}></Route>
            <Route path="/tasks" element={<ProtectedRoute user={user}><Tasks/></ProtectedRoute>}></Route>
            <Route path="/projectslist" element={<ProtectedRoute user={user}><ProjectsList/></ProtectedRoute>}></Route>
            <Route path="/projectview/:id" element={<ProtectedRoute user={user}><ProjectView/></ProtectedRoute>}></Route>
            <Route path="/teams" element={<ProtectedRoute user={user}><Teams/></ProtectedRoute>}></Route>
            <Route path="/userprofile" element={<ProtectedRoute user={user}><UserProfile/></ProtectedRoute>}></Route>

            <Route path="/teste" element={<Dashboard/>}></Route>
            <Route path="/accessdenied" element={<AccessDenied/>}></Route>
            <Route path="*" element={<Error404/>}></Route>
        </Routes>

      </Router>
    )
}
  
export default AppRoutes;