import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit,setSelect,select,handleComplete }) => {
  console.log(todos);
  console.log(select)
  return (
    <div>
      <div className="row">
        {todos.map((t) => (
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <p className="card-title">Name: {t.todo}</p>
                  <p className="card-text">Description: {t.description}</p>
                  <p className="task-status">Status: <input type="checkbox" onClick={handleComplete}/>completed</p>
                  
                  {/* <select className="btn1" onChange={(e)=>setSelect(e.target.value)}>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Notcompleted</option>
                  </select> */}

                  <button
                    onClick={() => handleEdit(t.id)}
                    type="button"
                    class="btn2 btn-primary"
                  >
                    Edit
                  </button>
                  <span>
                    <button
                      onClick={() => handleDelete(t.id)}
                      type="button"
                      class="btn3 btn-primary"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

