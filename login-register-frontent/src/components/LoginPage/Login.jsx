import LoginCss from './Login.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const login = async () => {
    const { email, password } = user;

    if (email && password) {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:9002/login', user);
        setLoading(false);
        const { success, message } = response.data;
        if (success) {
          alert(message);
          navigate('/home'); // Redirect to home page upon successful login
        } else {
          setError(message || 'Login failed');
        }
      } catch (error) {
        setLoading(false);
        setError(error.response?.data?.message || 'An unexpected error occurred');
      }
    } else {
      setError('Please provide both email and password');
    }
  };

  return (
    <div className={LoginCss.container}>
      <div className={`form-group ${LoginCss.login}`}>
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <input type="text" name="email" value={user.email} className="form-control py-2" placeholder="Enter your Email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="password" name="password" value={user.password} className="form-control" placeholder="Enter your Password" onChange={handleChange} />
        </div>
        <button className="btn btn-success form-control" onClick={login} disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
        <span className={`py-2 ${LoginCss.span}`}>or</span>
        <Link to="/register" className="btn btn-info form-control">Register</Link>
      </div>
    </div>
  );
}

export default Login;
