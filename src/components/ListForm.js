import React, { useContext } from "react";
import { TodoListContext } from "../Listcontext/TodolistcontextProvider";

const ListForm = ({ issue, tasks, isDone, keyId }) => {
  const { deleteForm, editForm } = useContext(TodoListContext);

  const handlerEditTodo = (e) => {
    e.preventDefault();
    editForm(keyId);
  };
  const handlerDeleteTodo = (e) => {
    e.preventDefault();
    deleteForm(keyId);
  };
  return (
    <div className="row pt-2">
      <div className="col-3 ">{issue}</div>
      <div className="col-3">{tasks}</div>
      <div className="col-3">{isDone ? "Done" : "Undone"}</div>
      <div className="col-3">
        <div className="row ">
          <button
            onClick={handlerEditTodo}
            className=" bg-dark border-white text-white"
          >
            Edit
          </button>
          <button
            onClick={handlerDeleteTodo}
            className="bg-dark border-white text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListForm;
