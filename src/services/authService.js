import api from './api';

const register = async (username, password) => {
    const response = await api.post('auth/register', { username, password });
    return response.data;
};

const login = async (username, password) => {
    const response = await api.post('auth/login', { username, password });
    if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout,
};

export default authService;