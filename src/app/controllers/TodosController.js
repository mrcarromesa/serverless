import Todo from '../models/Todo';

class TodosController {
  async store(req, res) {
    const todo = await Todo.create(req.body);
    return res.json(todo);
  }
}

export default new TodosController();