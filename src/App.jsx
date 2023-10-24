import "./App.css";

import { useState } from "react";
import TodoForm from "./FormComponents/Todoform";
import TodoList from "./FormComponents/Todolist";
import StatusFilter from "./FormComponents/Statusfilter";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo, description })
          : { id: t.id, todo, description: t.description }
      );

      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      setDescription("");

      return;
    }

    if ((todo, description !== "")) {
      setTodos([
        ...todos,
        { id: `${(todo, description)}-${Date.now()}`, todo, description },
      ]);
      setTodo("");
      setDescription("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setDescription(editTodo.description);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">My todo</h1>
      </div>
      <div className="container1">
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
          description={description}
          setDescription={setDescription}
        />
      </div>

      <div>
        <StatusFilter />
      </div>

      <div>
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default App;
