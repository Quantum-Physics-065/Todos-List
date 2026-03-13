const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('../../routes/todos.js');

async function ensureDB() {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todo-dev');
  }
}

const app = express();

app.use(async (req, res, next) => {
  try {
    await ensureDB();
    next();
  } catch (err) {
    res.status(500).json({ msg: 'Database connection failed' });
  }
});

app.use(express.json());
app.use('/', todosRouter);

module.exports = app;

