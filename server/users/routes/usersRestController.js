require('dotenv').config();
const express = require('express');
const { registerUser, loginUser, getUsers, getUser, updateUser, changeUserBusinessStatus, deleteUser } = require('../models/usersAccessDataService');
const router = express.Router();
const { handleError } = require('../../utils/errorHandler');
const { validateRegistration, validateLogin, validateUserUpdate} = require('../validations/userValidationService');
const normalizeUser = require('../helpers/normalizeUser');
const { generateUserPassword } = require('../helpers/bcrypt');

router.post('/', async (req, res) => {
    let user = req.body;
    const { error } = validateRegistration(user);
    if (error) return handleError(error);
    
    try {
        user.password = generateUserPassword(user.password);
        user = await registerUser(req.body);
        return res.send(user).status(201);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.post('/login', async (req, res) => {
    const { error } = validateLogin(req.body);
    if (error) return handleError(error);

    try {
        const user = await loginUser(req.body);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await getUsers();
        return res.send(users);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await getUser(id);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        let user = req.body;
        const { error } = validateUserUpdate(user);
        if (error) return handleError(res, 400, `Joi Error: ${error.details[0].message}`);
        user = normalizeUser(user);
        user = await updateUser(id, user);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await changeUserBusinessStatus(id);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await deleteUser(id);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;