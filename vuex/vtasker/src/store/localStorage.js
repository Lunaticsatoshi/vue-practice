export const getUsers = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users;
}

export const setUsers = (users) => {
    return localStorage.setItem('users', users);
}

export const getTasks = () => {
    const users = JSON.parse(localStorage.getItem('tasks')) || [];
    return users;
}

export const setTasks = (tasks) => {
    return localStorage.setItem('tasks', tasks);
}