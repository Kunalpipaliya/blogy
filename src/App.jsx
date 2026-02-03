import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import React from "react";
import About from './pages/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Category from './pages/Category';
import Blogdetails from './pages/Blogdetails';
import Authorprofile from './pages/Authorprofile';
import Contact from './pages/Contact';
import Navigationbar from './Component/Navbar';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Navigationbar/>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/author">
          <Authorprofile />
        </Route>
        <Route path="/blog-detail">
          <Blogdetails />
        </Route>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/about">
          <About />
        </Route>
       
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
