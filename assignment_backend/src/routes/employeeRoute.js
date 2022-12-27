const express = require('express')
const {  getEmployee, createEmployee,  updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const auth = require('../middleware/auth');
const noteRouter = express.Router()

noteRouter.get('/', auth, getEmployee);

noteRouter.post('/', auth, createEmployee);

noteRouter.delete("/:id", auth, deleteEmployee);

noteRouter.put("/:id", auth, updateEmployee);

module.exports = noteRouter;
