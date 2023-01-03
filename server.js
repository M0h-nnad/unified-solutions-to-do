const express = require('express');
const app = express();
const mongoConfig = require('./config/mongo.conf');
const errorMiddlerWare = require('./middleware/error.middleware');
const bodyParser = require('body-parser');
const taskRouter = require('./router/tasks.router');

app.use(bodyParser.json());

app.use('/task', taskRouter);

app.use(errorMiddlerWare);

app.listen(3000);