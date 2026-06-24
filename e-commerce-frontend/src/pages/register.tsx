import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import { setUser } from '../store/userSlice';
import type { AppDispatch } from '../store/store';
import '../globals.css';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setMessage('');
    //setPassword('');

    const trimmedName = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword) {
      setError('Please enter all of username, an email address and a password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    //dispatch(setUser({ username: trimmedName, email: trimmedEmail, token: trimmedPassword }));
    //setMessage('Account created successfully!');
    try {
    const response = await fetch('http://localhost:3000/reg/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
              },
      body: JSON.stringify({
        username: trimmedName,
        email: trimmedEmail,
        password: trimmedPassword
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Registration Failed!');
    }

    dispatch(
      setUser({ 
        username: trimmedName, 
        email: trimmedEmail, 
        token: data.token ||  null
      }));
    setMessage('Account created successfully!');
    setPassword('');
    //setTimeout(() => navigate('/'), 1500);
    //navigate('/');
    } catch (err: any) {
      setError(err.message || 'Something went wrong with connecting to server!');
    };
  };

  return (
    <div className="layout-wrapper">
      <NavigationBar />
      <div className="register-form-container">
        <h1>Create your account</h1>
        <p>Enter a username, email address, and password to register.</p>
        <form onSubmit={handleSubmit} className="register-form">
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
            />
          </label>

          <label>
            Password
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Pleae enter a memorable password!"
            />
          </label>

          <button type="submit">Register</button>
        </form>
        {error && <div className="error-message">{error}</div>}
        {message && <div className="success-message">{message}</div>}
      </div>
    </div>
  );
};

export default Register;
