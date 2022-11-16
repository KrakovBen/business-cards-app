const { handleJoiError } = require("../../utils/errorHandler");
const { find, findOne, remove, update, changeIsBizStatus, login, register } = require('../models/usersAccessDataService');
const { validateRegistration, validateLogin} = require('../validations/userValidationService');

const registerUser = async (_rawUser) => {
    const { error } = validateRegistration(_rawUser);
    if (error) return handleJoiError(error);

    try {
        let user = {..._rawUser};
        user.createdAt = new Date();
        user = await register(user);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const loginUser = async (_user) => {
    const { error } = validateLogin(_user);
    if (error) return handleJoiError(error);

    try {
        const user = await login(_user);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const getUsers = async () => {
    try {
        const user = await find();
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const getUser = async (_id) => {
    try {
        const user = await findOne(_id);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const updateUser = async (_id, _rawUser) => {
    let user = {..._rawUser};
    try {
        user = await update(_id, user);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const changeUserBusinessStatus = async (_userId) => {
    try {
        const user = await changeIsBizStatus(_userId);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};

const deleteUser = async (_id) => {
    try {
        const user = await remove(_id);
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }
};


module.exports = { registerUser, loginUser, getUsers, getUser, updateUser, changeUserBusinessStatus, deleteUser };