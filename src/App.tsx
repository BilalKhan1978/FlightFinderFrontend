import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Search from './components/Search';


function App() {
  
  return (
    <div style={{backgroundColor: "#eed3d7" }}>
      <div style={{textAlign: "center",padding:"20px",fontFamily:"monospace"    
  }} className='float-right'><a href="/login">Login</a></div>
      <h3 style={{backgroundColor: "white",textAlign: "center",padding:"20px",fontFamily:"monospace",
      color:"#aa8c90",fontWeight:"bold"
  }}>Flight Finder</h3>
  
    <div  className="container">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Search />}></Route>      
      <Route path='/login' element={<Login/>}></Route>      
    </Routes>
  </BrowserRouter> 
      </div>
      
    </div>
  );
}

export default App;
