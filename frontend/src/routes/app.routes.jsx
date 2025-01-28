import React from 'react';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Profile from '../Screens/Profile';

const AppRoutes= ()=>{
return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Profile/>} />

    </Routes>
    </BrowserRouter>
    </>
)
}
export default AppRoutes;