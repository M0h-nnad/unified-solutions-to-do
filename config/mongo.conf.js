const mongoose = require('mongoose');
const { Seeder } = require('mongoose-data-seed');
const dotenv = require('dotenv').config();

const Task = require('../schema/task.model');


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected To Mongo');
}).catch((e) => {
    console.error(e);
});

const data = [
    {
        title: 'task1',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolore. Impedit, possimus. Facere amet provident quidem. Natus, corporis molestias ea exercitationem eius explicabo tempora dicta a necessitatibus mollitia officia beatae!',
        user: '63b3f0474783499ef19ada30'
    },
    {
        title: 'task2',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolore. Impedit, possimus. Facere amet provident quidem. Natus, corporis molestias ea exercitationem eius explicabo tempora dicta a necessitatibus mollitia officia beatae!',
        user: '63b3f0474783499ef19ada30'
    },
    {
        title: 'task3',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolore. Impedit, possimus. Facere amet provident quidem. Natus, corporis molestias ea exercitationem eius explicabo tempora dicta a necessitatibus mollitia officia beatae!',
        user: '63b3f0474783499ef19ada30'
    }
    , {
        title: 'task4',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolore. Impedit, possimus. Facere amet provident quidem. Natus, corporis molestias ea exercitationem eius explicabo tempora dicta a necessitatibus mollitia officia beatae!',
        user: '63b3fb53b57d3ebe9875e094'
    }
    , {
        title: 'task5',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolore. Impedit, possimus. Facere amet provident quidem. Natus, corporis molestias ea exercitationem eius explicabo tempora dicta a necessitatibus mollitia officia beatae!',
        user: '63b3fb53b57d3ebe9875e094'
    }
]

class TasksSeeders extends Seeder {
    async shouldRun() {
        const tasksCount = await Task.count().exec();

        return tasksCount === 0;
    }

    async run() {
        return Task.create(data);
    }
}

module.exports = mongoose;