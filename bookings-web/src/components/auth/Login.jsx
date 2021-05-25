import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ email, password, onFormChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      User Registration
      <input
        type="email"
        placeholder="email"
        onChange={onFormChange}
        value={email}
        name="email"
      />
      <input
        type="password"
        placeholder="password"
        onChange={onFormChange}
        value={password}
        name="password"
      />
      <button>Sign In!</button>
    </form>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default Login;
