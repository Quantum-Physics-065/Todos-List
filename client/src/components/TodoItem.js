import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: todo.title,
    description: todo.description,
    category: todo.category,
    priority: todo.priority,
    dueDate: todo.dueDate ? todo.dueDate.split('T')[0] : '',
    completed: todo.completed
  });

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    updateTodo(todo._id, formData);
    setIsEditing(false);
  };

  const toggleCompleted = () => {
    updateTodo(todo._id, { ...formData, completed: !formData.completed });
  };

  return (
    <div className={`glass p-4 ${todo.completed ? 'opacity-50' : ''}`}>
      {isEditing ? (
        <form onSubmit={onSubmit} className="space-y-2">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="input-glass w-full"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={onChange}
            className="input-glass w-full"
          />
          <select name="category" value={formData.category} onChange={onChange} className="input-glass w-full">
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
          </select>
          <select name="priority" value={formData.priority} onChange={onChange} className="input-glass w-full">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={onChange}
            className="input-glass w-full"
          />
          <div className="flex space-x-2">
            <button type="submit" className="btn-glass">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="btn-glass">Cancel</button>
          </div>
        </form>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <h3 className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h3>
            <div className="flex space-x-2">
              <button onClick={toggleCompleted} className="btn-glass">
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => setIsEditing(true)} className="btn-glass">Edit</button>
              <button onClick={() => deleteTodo(todo._id)} className="btn-glass">Delete</button>
            </div>
          </div>
          <p className="text-sm text-gray-400">{todo.description}</p>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Category: {todo.category}</span>
            <span>Priority: {todo.priority}</span>
            {todo.dueDate && <span>Due: {new Date(todo.dueDate).toLocaleDateString()}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;