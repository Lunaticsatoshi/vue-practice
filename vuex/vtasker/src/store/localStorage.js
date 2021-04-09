export const getUsers = () => {
    return localStorage.getItem('users') || [];
}