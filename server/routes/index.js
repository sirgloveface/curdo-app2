const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const messageController = require('../controllers').message;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/message', messageController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );

  app.get('/api/logs', todosController.list);

  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};