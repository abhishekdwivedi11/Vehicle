import React from 'react';
import '../../registration.css';
import Navbar from '../layout/Navbar';
import UserFunctions from '../../Axios/UserAxios';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const Customer = () => {
  const history = useHistory();

  const { register, handleSubmit, errors, getValues } = useForm();

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      // Validate the form using react-hook-form
      await handleSubmit((data) => {
        // Use the validated data to make the API call
        const { name, email, mobile, password, confirm_password } = data;

        const add = {
          name: name,
          mobileNumber: mobile,
          email: email,
          password: password,
        };

        // Make the API call to register the customer
        UserFunctions.registerCustomer(add).then((res) => {
          // Redirect to login page after successful registration
          history.push('/login');
        });
      })();

    } catch (error) {
      console.error('Registration error:', error);
      // Handle any other errors here, if needed
    }
  };

  return (
    <div>
      <Navbar />
      <div className="card bg-light">
        <article className="card-body w-100 mx-auto" style={{ maxWidth: 500 }}>
          <h4 className="card-title mt-3 text-center">
            Create Customer Account
          </h4>
          <p className="text-center">Get started with your free account</p>
          <form onSubmit={onRegister}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className={classNames('form-control', {
                  'is-invalid': errors.name,
                })}
                name="name"
                ref={register({
                  required: 'This field is required.',
                  pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: 'Please enter a valid name.',
                  },
                })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
              <input
                type="text"
                className={classNames('form-control', {
                  'is-invalid': errors.email,
                })}
                placeholder="E-mail Address"
                name="email"
                ref={register({
                  required: 'This field is required.',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please enter a valid e-mail address.',
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-phone"></i>
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: 80 }}>
                <option selected="">+91</option>
              </select>
              <input
                className={classNames('form-control', {
                  'is-invalid': errors.mobile,
                })}
                name="mobile"
                placeholder="Mobile Number"
                type="text"
                ref={register({
                  required: 'This field is required.',
                  pattern: {
                    value: /^\d{10}$/,
                    message: 'Please enter a valid 10 digit mobile number.',
                  },
                })}
              />
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile.message}</div>
              )}
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className={classNames('form-control', {
                  'is-invalid': errors.password,
                })}
                placeholder="Enter Your Password"
                name="password"
                ref={register({
                  required: 'This field is required.',
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    message:
                      'Password must be 6 to 20 characters and contain at least one numeric digit, one uppercase, and one lowercase letter.',
                  },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                className={classNames('form-control', {
                  'is-invalid': errors.confirm_password,
                })}
                placeholder="Confirm Your Password"
                name="confirm_password"
                ref={register({
                  required: 'This field is required.',
                  validate: (value) =>
                    value === getValues('password') ||
                    "Passwords don't match.",
                })}
              />
              {errors.confirm_password && (
                <div className="invalid-feedback">
                  {errors.confirm_password.message}
                </div>
              )}
            </div>

            {/* Display a general error message if any validation fails */}
            {Object.keys(errors).length > 0 && (
              <div className="alert alert-danger">
                Please fix the errors and try again.
              </div>
            )}

            <div className="form-group">
              <button type="submit" className="btn btn-danger btn-block">
                Create Account
              </button>
            </div>
            <p className="text-center">
              Have an account? <a href="/login">Log In</a>
            </p>
          </form>
        </article>
      </div>
    </div>
  );
};

export default Customer;
