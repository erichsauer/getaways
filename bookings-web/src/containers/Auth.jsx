import React, { useState } from 'react';
import Registration from '../components/app/Registration';

const Auth = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    subscription: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleFormChange = ({ target: { value, name, type } }) => {
    setForm((form) => ({
      ...form,
      [name]: type === 'checkbox' ? !form[name] : value,
    }));
  };

  return (
    <Registration
      onFormSubmit={handleFormSubmit}
      onFormChange={handleFormChange}
      {...form}
    />
  );
};

export default Auth;
