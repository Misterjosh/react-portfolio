import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Footer from "../components/footer/Footer";
import MyNavbar from "../components/navbar/Navbar";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
