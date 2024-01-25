const express = require('express');
const studentController = require('../controllers/student.controller');

const routers = express.Router();

routers.get('/', studentController.getStudents);
routers.post('/', studentController.createStudent);

module.exports = routers;
