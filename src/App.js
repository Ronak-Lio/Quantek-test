import React from 'react';
import './App.css';
import FirstPage from './FirstPage';
import ResultPage from './ResultPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Routes>
        <Route path = "/" element = {<FirstPage/>}/>
        <Route path = "/result" element = {<ResultPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
