import React, { useState } from "react";
import "../Styles/loginStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userName=localStorage.getItem('email')?localStorage.getItem('email'):"admin@admin.com";
  const userPassword=localStorage.getItem('password')?localStorage.getItem('password'):'admin'
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(email===userName && password===userPassword){
        toast.success("Login Success");
        navigate('/profile')
      }
      else{
        toast.error("Invalid email or password");
      }
      
  }
  return (
    <>
      <div className="form_container d-flex flex-column align-items-center justify-content-center">
        <form>
          <h3 className="form__heading">Users Management System</h3>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="exampleInputEmail1"
              value={email}
              className="form-control"
              aria-describedby="emailHelp"
              onChange={e=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className="form__signupLink mb-3">
            <p>
              Don't Have An Account? <Link>Signup !</Link>
            </p>
          </div>
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
