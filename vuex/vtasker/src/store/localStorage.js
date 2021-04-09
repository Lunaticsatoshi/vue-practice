export const getUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}

export const setUsers = (users) => {
    return localStorage.setItem('users', users);
}