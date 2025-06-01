import React, { useState } from 'react';
import './CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !agree) {
      alert('Please fill out all fields and agree to the terms.');
      return;
    }
    navigate('/');
  };

  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-fields">
            <input type="email" placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="login-agree">
            <input type="checkbox" name="agree" id="agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <label htmlFor="agree">By continuing, I agree to the terms of Use & Privacy Policy.</label>
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="login-login">Create a new Account? <Link to='/login'><span>Signup here</span></Link></p>
      </div>
    </div>
  );
}

export default Login;
