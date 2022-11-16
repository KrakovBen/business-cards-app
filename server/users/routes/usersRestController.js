require('dotenv').config();
const express = require('express');
const { registerUser, loginUser, getUsers, getUser, updateUser, changeUserBusinessStatus, deleteUser } = require('../service/userService');
const router = express.Router();
const { handleError } = require('../../utils/errorHandler');
const PORT = process.env.PORT || 8181;
const EndPoint = `http://localhost:${PORT}/users`;

router.post('/', async (req, res) => {
    try {
        const user = await registerUser(req.body);
        return res.send(user).status(201);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

router.post('/login', async (req, res) => {
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
    const id = req.params.id;
    try {
        const user = await updateUser(id);
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