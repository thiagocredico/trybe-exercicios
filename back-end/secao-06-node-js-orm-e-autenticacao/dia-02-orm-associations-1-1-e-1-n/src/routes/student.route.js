const express = require('express');
const studentController = require('../controllers/student.controller');

const studentRoute = express.Router();

studentRoute.get('/', studentController.getStudents);

module.exports = studentRoute;