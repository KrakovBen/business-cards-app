const DB = process.env.DB || 'mongoDB';
const UserSchema = require('./mongoDB/User');

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

const loginUser = async (_user) => {
    if(DB === 'mongoDB'){
        try {
            _user._id = 'ID 1234';
            return Promise.resolve(`In login ${_user._id}`);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const registerUser = async (_user) => {
    if(DB === 'mongoDB'){
        try {
            const user = new UserSchema(_user);
            await user.save();
            return Promise.resolve(_user);
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