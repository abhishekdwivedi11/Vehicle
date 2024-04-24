import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../login.css';
import Navbar from '../layout/Navbar';
import UserFunctions from '../../Axios/UserAxios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const Login = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, setError } = useForm();

  const onLogin = async (data) => {
    try {
      const res = await UserFunctions.login(data);

      console.log(res.data);
      console.log('hii');
      sessionStorage.setItem('user', JSON.stringify(res.data));

      if (res.data.role === 'ADMIN') {
        history.push('/admin-dash');
      } else if (res.data.role === 'CUSTOMER') {
        history.push('/customer-dash');
      } else if (res.data.role === 'SERVICEADVISOR') {
        history.push('/serviceadvisor-dash');
      } else if (res.data.role === 'MECHANIC' && res.data.active === true) {
        history.push('/mechanic-dash');
      } else if (res.data.role === 'MECHANIC' && res.data.active === false) {
        history.push('/mechanic-show');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with an error status
        console.error(error.response.data);
        setError('email', { type: 'manual', message: error.response.data.message });
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form" onSubmit={handleSubmit(onLogin)}>
                  <h3 className="text-center my-text" id="my-text">
                    Login
                  </h3>
                  <div className="form-group">
                    <label htmlFor="email" id="my-text">
                      Email Address :
                    </label>
                    <br></br>
                    <input
                      id="my-text"
                      type="text"
                      className={classNames('form-control', {
                        'is-invalid': errors.email,
                      })}
                      name="email"
                      ref={register({
                        required: 'Email id is required.',
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: 'Please enter a valid e-mail address.',
                        },
                      })}
                    ></input>
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" id="my-text">
                      Password :
                    </label>
                    <br></br>
                    <input
                      type="password"
                      className={classNames('form-control', {
                        'is-invalid': errors.password,
                      })}
                      name="password"
                      ref={register({
                        required: 'Password is required.',
                      })}
                    ></input>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password.message}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" id="my-text">
                      <span>Remember me</span> 
                      <span>
                        <input id="remember-me" name="remember-me" type="checkbox"></input>
                      </span>
                    </label>
                    <br></br>
                    <input
                      style={{ marginLeft: 190 }}
                      type="submit"
                      name="submit"
                      className="btn btn-danger"
                      value="Submit"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
