import React from 'react';
import PropTypes from 'prop-types';

const Registration = ({
  name,
  email,
  password,
  subscription,
  onFormSubmit,
  onFormChange,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      User Registration
      <input
        type="text"
        placeholder="name"
        onChange={onFormChange}
        value={name}
        name="name"
      />
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
      <label>
        Subscribe to SPAM list?
        <input
          type="checkbox"
          onChange={onFormChange}
          checked={subscription}
          name="subscription"
        />
      </label>
      <button>Sign me up!</button>
    </form>
  );
};

Registration.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  subscription: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
};

export default Registration;
