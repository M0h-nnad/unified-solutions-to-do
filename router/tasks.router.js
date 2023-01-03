const express = require('express');
const router = express()
const auth = require('../middleware/auth');
const taskController = require('../controller/task.controller');


router.get('/all', auth.verfiyToken, taskController.getAllTasks);
router.get('/', auth.verfiyToken, taskController.getUserTasks);
router.post('/', auth.verfiyToken, taskController.createTask);
router.put('/:id', auth.verfiyToken, taskController.updateTask);
router.delete('/:id', auth.verfiyToken, taskController.deleteTask);

module.exports = router;