import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    const getStorage = async () => {
      const response = await fetch("http://localhost:5000/storage");
      const result = await response.json();
      setStorage(result);
    };
    getStorage();
  }, [storage]);

  const addToStorage = (text) => {
    let newTodo = { checked: false };
    newTodo.text = text;
    newTodo.id = Math.floor(Math.random() * 100);

    fetch("http://localhost:5000/storage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    // setStorage([...storage, newTodo]);
  };

  const delFromStorage = (id) => {
    fetch(`http://localhost:5000/storage/${id}`, {
      method: "DELETE",
    });
    // setStorage(storage.filter((todo) => todo.id !== id));
  };

  const checkboxChange = async (id) => {
    let fetchTodo = async () => {
      let response = await fetch(`http://localhost:5000/storage/${id}`);
      let data = await response.json();
      return data;
    };
    let getTodo = await fetchTodo();
    let updatedTodo = { ...getTodo, checked: !getTodo.checked };

    fetch(`http://localhost:5000/storage/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    // setStorage(
    //   storage.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
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
