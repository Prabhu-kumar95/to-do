import React from "react";

const StatusFilter = () => {
  return (
    <div>
      <div className="container2">
        <h4 className="heading1">
          <b>My Todos</b>
        </h4>
        <span>
          <h4 className="status">
            <b>Status Filter:</b>
          </h4>
        </span>
        <span>
          <select className="btn">
            <option className="text" value="completed">
              Completed
            </option>
            <option className="text" value="notcompleted">
              Notcompleted
            </option>
            <option className="text" value="All">
              All
            </option>
          </select>
        </span>
      </div>
    </div>
  );
};
export default StatusFilter;
