import React from 'react';
import { Routes, Route,Switch } from "react-router-dom";
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';
import Platform from './pages/Platform'
import Navbar from './components/navbar';
import Test from './pages/Test';
import Navbar2 from './components/Navbar2';

function App() {
  return (
    <>
      <Landing/>
        {/* <Switch>
          <Route path="/" exact ><Landing/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/platform"><Platform/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch> */}
    </>
  );
}

export default App;
