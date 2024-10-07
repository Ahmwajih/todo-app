import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}