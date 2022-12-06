import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [storage, setStorage] = useState([
    {
      text: "Water Lilies",
      checked: false,
      id: 1,
    },
    {
      text: "Clean Backyard",
      checked: false,
      id: 2,
    },
    {
      text: "Steam Mop",
      checked: false,
      id: 3,
    },
  ]);

  const addToStorage = (text) => {
    let newTodo = { checked: false };
    newTodo.text = text;
    newTodo.id = Math.floor(Math.random() * 100);
    setStorage([...storage, newTodo]);
  };

  const delFromStorage = (id) => {
    setStorage(storage.filter((todo) => todo.id !== id));
  };

  const checkboxChange = (id) => {
    setStorage(
      storage.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App container">
      <h2>Todo App</h2>
      <AddTodo addToStorage={addToStorage} />
      <ListTodo
        storage={storage}
        delFromStorage={delFromStorage}
        checkboxChange={checkboxChange}
      />
      <Footer storage={storage} />
    </div>
  );
}

export default App;
