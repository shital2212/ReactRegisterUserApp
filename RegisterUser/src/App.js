import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import AllUsers from './Components/AllUsers';
import Edit from './Components/Edit';


function App() {

  
  return (
    <div className="App">
      
      <nav>
      <Link to="/">Home</Link>
      <Link to="/create">CreateUser</Link>
      <Link to="/allusers">AllUsers</Link>      
      </nav>
      <Outlet/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}/>
        <Route path="/allusers" element={<AllUsers/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
