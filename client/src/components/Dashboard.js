import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.get('/todos');
        setTodos(res.data);
      } catch (err) {
        console.error('Failed to fetch todos:', err);
      }
    };
    fetchTodos();
  }, []);


  const addTodo = async (todo) => {
    try {
      const res = await api.post('/todos', todo);
      setTodos([res.data, ...todos]);
    } catch (err) {
      console.error('Failed to add todo:', err);
    }
  };


  const updateTodo = async (id, updatedTodo) => {
    try {
      const res = await api.put(`/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => todo._id === id ? res.data : todo));
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };


  const deleteTodo = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  };


  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl">Todo Dashboard</h1>
          <button onClick={logout} className="btn-glass">Logout</button>
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Dashboard;