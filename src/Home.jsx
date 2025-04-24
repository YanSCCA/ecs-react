import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Task from "./components/Task";
import { db } from "./firebase";
import { getFormData } from "./utils";

export default function Home() {
  const user = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [username, setUsername] = useState(null)

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

  const handleChangeUsername = async (e) => {
    e.preventDefault();

    const { nickname } = getFormData(e.target);
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      // Update last login time for existing user
      await updateDoc(userDocRef, {
        displayName: nickname
      });
      setUsername(nickname)
    }
  }

  const fetchSavedUsername = async () => {
    if (!getAuth().currentUser) return;
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      // Update last login time for existing user
      const docSnap = await getDoc(userDocRef);
      return docSnap.data().displayName
    }

    return null;
  }

  useEffect(() => {
    const setN = async () => {
      const nick = await fetchSavedUsername()
      setUsername(nick)
    };

    setN();
  })

  return (
    <main>
      <p>{user === null ? "Please sign in" : `Hey, ${username}`}</p>
      {user ? <form onSubmit={handleChangeUsername}>
        <input id="nickname" name="nickname" placeholder="New Nickname" />
        <input id="setNickname" type="submit" value="Change Nickname" />
      </form> : null}
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
