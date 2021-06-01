const USER = 'USER';

const saveUserLocalStorage = (user) => {
    localStorage.setItem(USER, JSON.stringify(user));
};

const getUserLocalStorage = () => JSON.parse(localStorage.getItem(USER));

export { saveUserLocalStorage, getUserLocalStorage };