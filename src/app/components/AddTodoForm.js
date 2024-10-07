import { useState } from 'react';

export default function AddTodoForm({ setTodos }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify({ title, completed: false }),
    });
    const newTodo = await res.json();
    setTodos(prev => [...prev, newTodo]);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}