import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

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
      navigate('/dashboard');
    } catch (err) {
      alert('Registration failed');
    }
  };

  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.width = particle.style.height = (4 + Math.random() * 8) + 'px';
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center p-8 max-w-4xl mx-auto">
      <div id="particles" className="particles fixed inset-0 -z-10"></div>
      <div className="hero-glass pulse-glow w-full max-w-sm">
        <div className="text-center mb-10 px-4">
          <h1 className="logo-title block mx-auto mb-4">TodoFlow</h1>
          <p className="text-slate-300 mb-1 mt-4">Create your account</p>
          <p className="text-sm text-slate-400">Join us today</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-5 px-8 pb-8">
          <div className="input-group fade-in stagger-1">
            <label htmlFor="username" className="block text-sm font-medium text-slate-200 mb-2">
              Username
            </label>
            <div className="relative">
              <UserIcon className="input-icon" />
              <input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="Choose a username"
                className="input-glass input-field"
                required
              />
            </div>
          </div>
          <div className="input-group fade-in stagger-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
              Email
            </label>
            <div className="relative">
              <EnvelopeIcon className="input-icon" />
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                className="input-glass input-field"
                required
              />
            </div>
          </div>
          <div className="input-group fade-in stagger-3">
            <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-2">
              Password
            </label>
            <div className="relative">
              <LockClosedIcon className="input-icon" />
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Create a password"
                className="input-glass input-field"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-glass w-full fade-in stagger-3">
            Sign Up
          </button>
        </form>
        <p className="px-8 pb-6 text-center text-sm">
          Already have an account? <Link to="/login" className="nav-link font-medium">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

