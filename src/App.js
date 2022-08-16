import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <>
    <div className='container'>
      <BrowserRouter>
           <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home />} />    
          </Routes>
    </BrowserRouter>
    </div>

    </>
  )
}

export default App