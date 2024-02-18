import RegistrationCss from './Registration.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Registration() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: ''
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

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      setLoading(true);
      axios.post('http://localhost:9002/register', user)
        .then(res => {
          setLoading(false);
          alert(res.data.message);
          navigate('/login'); // Redirect to login page after successful registration
        })
        .catch(error => {
          setLoading(false);
          setError('An unexpected error occurred. Please try again later.');
        });
    } else {
      setError('Invalid input');
    }
  };

  return (
    <>
      <div className={RegistrationCss.container}>
        <div className={`form-group ${RegistrationCss.register}`} >
          <h2 className=''>Register Now!!</h2>
      {error && <div className="alert alert-danger">{error}</div>}
          <div className='mb-3 '>
            <input type="text" name='name' value={user.name} className='form-control py-2 ' placeholder='Enter your Full Name' onChange={handleChange} />
          </div>
          <div className='mb-3 '>
            <input type="email" name='email' value={user.email} className='form-control py-2' placeholder='Enter your Email' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <input type="password" name='password' value={user.password} className='form-control' placeholder='Enter your Password' onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <input type="password" name='reEnterPassword' value={user.reEnterPassword} className='form-control' placeholder='Enter your Confirm Password' onChange={handleChange} />
          </div>
          <button className="btn btn-success form-control" onClick={register} disabled={loading}>{loading ? 'Loading...' : 'Register'}</button>
          <span className={`py-2 ${RegistrationCss.span}`}>or</span>
          <Link to="/login" className='btn btn-info form-control'>Login</Link>
        </div>
      </div>
    </>
  );
}

export default Registration;
