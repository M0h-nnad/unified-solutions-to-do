const Task = require('../schema/task.model');

const createTask = async (req, res, next) => {
    const { title, body } = req.body;
    const userId = req.token.userId
    try {
        const newtask = await Task({ title, body, user: userId });
        console.log(newtask);
        await newtask.save();
        res.sendStatus(201);
    } catch (e) {
        next(e);
    }
}

const updateTask = async (req, res, next) => {
    const id = req.params.id;
    const { title, body } = req.body;
    const userId = req.token.userId;

    try {
        const task = await Task.findById(id);


        if (task.user.toString() !== userId) return res.status(403).json({ message: 'You are Not allowed to update this task', sentObject: {} });

        const updatedTask = await Task.updateOne({ _id: id }, { title, body });

        res.status(200).json({ message: 'Updated Successfully', sentObject: updatedTask });
    } catch (e) {
        next(e);
    }
}

const deleteTask = async (req, res, next) => {
    const id = req.params.id;
    const userId = req.token.userId;

    try {
        const task = await Task.findById(id);

        if (task.user.toString() !== userId) return res.status(403).send({ message: 'You are Not allowed to update this task', sentObject: {} });

        const deletedTask = await Task.deleteOne({ _id: id });

        res.status(200).send({ message: 'Deleted Successfully', sentObject: {} });
    } catch (e) {
        next(e);
    }
}

const getUserTasks = async (req, res, next) => {
    const userId = req.token.userId;

    try {

        const tasks = await Task.find({ user: userId });

        res.json({ message: 'Retrived Successfully', sentObject: tasks });
    } catch (e) {
        next(e);
    }
}


const getAllTasks = async (req, res, next) => {
    const { page, limit } = req.query;
    try {
        const tasks = await Task.find().limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 });

        res.status(200).send({ message: 'Retrived Successfully', sentObject: tasks })
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getUserTasks,
    getAllTasks,
}