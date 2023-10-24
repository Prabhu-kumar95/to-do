import React from "react";

const TodoForm = ({
  handleSubmit,
  todo,
  editId,
  setTodo,
  description,
  setDescription,
}) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="inputbox1"
        placeholder="Todo Name"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {
        <span>
          <input
            className="inputbox2"
            placeholder="Todo Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </span>
      }
      <span>
        <button type="Submit" class="btn0 btn-primary">
          {editId ? "Update Todo" : "Add Todo"}
        </button>
      </span>
      
    </form>
  );
};
export default TodoForm;
