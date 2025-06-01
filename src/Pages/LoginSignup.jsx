import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { Link, useNavigate } from 'react-router-dom'


const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name || !email || !password || !agree) {
      alert('Please fill out all fields and agree to the terms.');
      return;
    }

    navigate('/');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <label htmlFor="agree">By continuing, I agree to the terms of Use & Privacy Policy.</label>
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">Already have an Account? <Link to='/signup'><span>Login here</span></Link></p>
      </div>
    </div>
  );
};

export default LoginSignup;
