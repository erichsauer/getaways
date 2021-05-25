const USER = 'USER';

const saveToLocalStorage = (user) => {
  localStorage.setItem(USER, JSON.stringify(user));
};

const getFromLocalStorage = () => JSON.parse(localStorage.getItem(USER));

export { saveToLocalStorage, getFromLocalStorage };
