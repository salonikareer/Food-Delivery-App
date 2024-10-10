import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setshowlogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const newUrl = `${url}/api/user/${currState === "Login" ? "login" : "register"}`;
      const response = await axios.post(newUrl, data);
      console.log("response::", response);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setshowlogin(false);
      } else {
        alert(response.data.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Signup" && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder='Your Name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder='Email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder='Password'
            required
          />
        </div>
        <button type="submit">
          {currState === "Signup" ? "Create Account" : "Login"}
        </button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p>By continuing, I agree to the Terms & Conditions</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Signup")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;