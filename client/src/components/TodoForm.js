import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'General',
    priority: 'Medium',
    dueDate: ''
  });

  const { title, description, category, priority, dueDate } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addTodo(formData);
    setFormData({
      title: '',
      description: '',
      category: 'General',
      priority: 'Medium',
      dueDate: ''
    });
  };

  return (
    <div className="glass p-6 mb-8">
      <h2 className="text-xl mb-4">Add New Todo</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Title"
          className="input-glass"
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          className="input-glass"
        />
        <select name="category" value={category} onChange={onChange} className="input-glass">
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
        <select name="priority" value={priority} onChange={onChange} className="input-glass">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          name="dueDate"
          value={dueDate}
          onChange={onChange}
          className="input-glass"
        />
        <button type="submit" className="btn-glass md:col-span-2">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;