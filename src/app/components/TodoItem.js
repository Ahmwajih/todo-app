export default function TodoItem({ todo, setTodos }) {
    const toggleComplete = async () => {
      const res = await fetch('/api/todos', {
        method: 'PUT',
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
      });
      if (res.ok) {
        setTodos(prev => prev.map(t => t._id === todo._id ? { ...t, completed: !t.completed } : t));
      }
    };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
        />
        {todo.title}
      </li>
    );
  }