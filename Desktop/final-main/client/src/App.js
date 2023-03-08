import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Product" element={<ProductList />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
