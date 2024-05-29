import React, { useContext, useEffect } from 'react'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main';
import axios from "axios";
import "./App.css";
import Landing from './components/Landing';
import Login from './components/Login';
import Profile from './components/Profile';
import Sidebar from './components/Navbar';
import Doctors from './components/Doctors';
import Messages from './components/Messages';




const App = () => {
  const {isAuthenticated,setIsAuthenticated,setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async()=>{
      try{
        const response = await axios.get("http://localhost:4000/api/v1/user/admin/me",{withCredentials : true});
        setIsAuthenticated(true);
        setUser(response.data.user);
      }catch(error){
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  },[isAuthenticated]);



  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/messages' element={<Messages/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
