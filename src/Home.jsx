import { useContext, useState } from "react";
import Task from "./components/Task";
import { getFormData } from "./utils";
import { AuthContext } from "./AuthContext";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const user = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { task } = getFormData(e.target);
    if (task.length === 0) return;

    addTodo(task)
  }

  const addTodo = (task) => {
    setTodos([...todos, { id: crypto.randomUUID(), task }])
  }

  const duplicateTodo = (id) => {
    addTodo(todos.find(todo => todo.id === id).task)
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main>
      <p>{user === null ? "Please sign in" : `Hey, ${user.displayName}`}</p>
      <h1>Uselisst</h1>
      <p>The useless to-do list</p>
      <form onSubmit={handleSubmit}>
        <input id="input" name="task" placeholder="New task" />
        <input id="add" type="submit" value="Add" />
      </form>
      <h4>Tasks:</h4>
      <ul id="tasksList">
        {todos.map(todo =>
          <Task key={todo.id} task={todo.task} duplicateTask={() => duplicateTodo(todo.id)} removeTask={() => removeTodo(todo.id)} />
        )}
      </ul>
    </main>
  );
}
