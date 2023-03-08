import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./navigation.css";

import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions/userActions";
const Navigation = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.userReducer);
  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const signOut = () => {
    dispatch(logOut());
  };
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  // const [text, setText] = useState("");

  // const handleChange = (e) => setText(e.target.value);
  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className="logo">
        <h2> <i>STE BROTHER ABIDI TRADING</i></h2>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="test" to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link className="test" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="test" to="/Product">
            Product
          </Link>
        </li>
        <li>
          {" "}
          {isAuth ? (
            <Link onClick={signOut} to="/Home">
              {" "}
              logout
            </Link>
          ) : (
            <Link className="test" to="/Login">
              {" "}
              Login{" "}
            </Link>
          )}{" "}
        </li>

        <li>
          <Link className="test" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="nav-icons">
        <BiSearch
          // onClick={handleChange}
          className="icon"
          style={{ marginRight: "1rem" }}
        />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        <HiOutlineMenuAlt4 className="icon" onClick={handleNav} />
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>
            <Link className="test" to="/Home">
              {" "}
              Home{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link className="test" to="/About">
              About
            </Link>
            <li>
              <Link className="test" to="/Product">
                Product
              </Link>
            </li>
          </li>
          <li>
            <Link className="test" to="/Login">
              {" "}
              Login{" "}
            </Link>
          </li>
          <li>
            <Link className="test" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-menu-botton">
          <div className="menu-icons">
            <button>Search </button>
            <button>Account </button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            {/* <FaFacebook className="icon"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
