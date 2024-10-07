import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

export default function Home() {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}