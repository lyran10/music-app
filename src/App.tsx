import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { MainAuth } from './component/pages/mainAuth';
import { HomePage } from './component/pages/homePage';

function App() {
  return (
    <div className="">
      {/* <MainAuth/> */}
      <HomePage/>
    </div>
  );
}

export default App;
