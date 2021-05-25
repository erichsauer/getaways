import React, { useState } from 'react';
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration';
import { saveToLocalStorage } from '../components/utils/localStorage';

const Auth = ({ token, user, onRegistration, onLogIn, onLogOut }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    subscription: false,
  });

  const handleFormChange = ({ target: { value, name, type } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? !prevForm[name] : value,
    }));
  };

  if (token && user) return <button onClick={onLogOut}>Log out</button>;
  if (user)
    return (
      <Login onFormSubmit={onLogIn} onFormChange={handleFormChange} {...form} />
    );

  return (
    <Registration
      onFormSubmit={onRegistration}
      onFormChange={handleFormChange}
      {...form}
    />
  );
};

export default Auth;
