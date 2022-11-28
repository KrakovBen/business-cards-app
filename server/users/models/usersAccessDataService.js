const DB = process.env.DB || 'mongoDB';
const normalizeUser = require('../helpers/normalizeUser');
const UserSchema = require('./mongoDB/User');
const { pick } = require('lodash');
const { comparePassword } = require('../helpers/bcrypt');

const getUsers = async () => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve([{users:'In mongoDB'}]);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const getUser = async (_id) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`User number ${_id}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const loginUser = async ({email, password}) => {
    if(DB === 'mongoDB'){
        try {
            const user = await UserSchema.findOne({email});
            if (!user) throw new Error('Invalid email or Password.');

            const validPassword = comparePassword(password, user.password);
            if(!validPassword) throw new Error('Invalid email or Password.');

            return Promise.resolve(`${email} Connected`);
        } catch (error) {
            error.status = 403;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const registerUser = async (normalizeUser) => {
    if(DB === 'mongoDB'){
        try {
            const { email } = normalizeUser;
            let user = await UserSchema.findOne({email});
            if (user) throw new Error('This Email is already registered!');
            user = new UserSchema(normalizeUser);
            user = await user.save();
            user = pick(user, ['name', 'email', '_id']);
            return Promise.resolve(user);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const deleteUser = async (_id) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`User number ${_id} Deleted!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const updateUser = async (_id, _user) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`User number ${_id} Updated!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const changeUserBusinessStatus = async (_id_user) => {
    if(DB === 'mongoDB'){
        try {
            return Promise.resolve(`User number ${_id_user} is Business!!`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};


module.exports = { getUsers, getUser, loginUser, registerUser, deleteUser, updateUser, changeUserBusinessStatus };