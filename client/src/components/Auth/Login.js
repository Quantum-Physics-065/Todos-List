import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axios';


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-8 w-full max-w-md">
        <h1 className="text-2xl mb-6">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            className="input-glass mb-4"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            className="input-glass mb-4"
            required
          />
          <button type="submit" className="btn-glass w-full">Login</button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/register" className="text-blue-400">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;