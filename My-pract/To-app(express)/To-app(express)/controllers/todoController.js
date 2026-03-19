let todos = [
  { id: 1, task: "Learn Express", completed: false },
  { id: 2, task: "Build ToDo App", completed: false }
];

// GET all todos
exports.getTodos = (req, res) => {
  res.json(todos);
};

// CREATE todo
exports.createTodo = (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// UPDATE todo
exports.updateTodo = (req, res) => {
  const id = parseInt(req.params.id);

  todos = todos.map(todo =>
    todo.id === id
      ? { ...todo, ...req.body }
      : todo
  );

  res.json({ message: "Todo updated" });
};

// DELETE todo
exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);

  todos = todos.filter(todo => todo.id !== id);

  res.json({ message: "Todo deleted" });
};