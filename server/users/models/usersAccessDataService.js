const DB = process.env.DB || 'mongoDB';

const find = async () => {
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

const findOne = async (_id) => {
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

const login = async (_user) => {
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

const register = async (_user) => {
    if(DB === 'mongoDB'){
        try {
            _user._id = 'ID 1234';
            return Promise.resolve(_user._id);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }

    return Promise.resolve('Not in mongoDB');
};

const remove = async (_id) => {
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

const update = async (_id, _user) => {
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

const changeIsBizStatus = async (_id_user) => {
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


module.exports = { find, findOne, remove, update, changeIsBizStatus, login, register };