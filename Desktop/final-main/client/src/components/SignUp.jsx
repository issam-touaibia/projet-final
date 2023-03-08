import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { signUp } from "../redux/actions/userActions";
// import Navigation from "./Navigation";
import "./signUp.css";
export default function SignUp(props) {
  const { loading, users } = useSelector((state) => state.userReducer);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // registering users
  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      password,
    };
    dispatch(signUp(newUser));
  };
  return (
    <div className="Auth-form-container1">
      {users ? (
        <Navigate to="/login" />
      ) : (
        <form className="Auth-form" onSubmit={handleRegister}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>

            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-control mt-1"
                placeholder="Last name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/Login">sign in?</a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
