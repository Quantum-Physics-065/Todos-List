import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axios';


const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert('Registration failed');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass p-8 w-full max-w-md">
        <h1 className="text-2xl mb-6">Register</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="Username"
            className="input-glass mb-4"
            required
          />
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
          <button type="submit" className="btn-glass w-full">Register</button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;