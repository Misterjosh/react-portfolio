import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> 
        <Footer />
      </div>
    </Router>
  );
}

export default App;
