import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Loging from './pages/Auth/Loging';
import Registration from './pages/Auth/Registration';

function App() {
  return (



    <div className="App">
      
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Loging/>}/>
      <Route path='/signup' element={<Registration/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
