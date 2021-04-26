import React, { useState, useContext, useEffect } from "react";
import { TodoListContext } from "../Listcontext/TodolistcontextProvider";

const Form = () => {
  const { addForm, selectTopic, editResult } = useContext(TodoListContext);

  const [issue, setissue] = useState("");
  const [tasks, settasks] = useState("");
  const [isDone, setisdone] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (issue === "" || tasks === "") {
      alert("Write something!");
    } else if (selectTopic === null) {
      alert("Please choose the topic!");
    } else {
      addForm({ issue, tasks, isDone }, selectTopic.id);
      setissue("");
      settasks("");
      setisdone("");
    }
  };

  const handlerIssue = (e) => {
    setissue(e.target.value);
  };
  const handlerTasks = (e) => {
    settasks(e.target.value);
  };
  const handlerIsDone = (e) => {
    setisdone(!isDone);
  };

  useEffect(() => {
    if (editResult !== null) {
      setissue(editResult.issue);
      settasks(editResult.tasks);
      setisdone(editResult.isdone);
    } else {
      setissue("");
      settasks("");
      setisdone("");
    }
  }, [editResult]);

  return (
    <form onSubmit={handlerSubmit}>
      <div className="mb-3">
        <label className="form-label text-warning ">Issue</label>
        <input
          type="text"
          value={issue}
          onChange={handlerIssue}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label text-warning">Task</label>
        <input
          type="text"
          value={tasks}
          onChange={handlerTasks}
          className="form-control"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          checked={isDone}
          onChange={handlerIsDone}
          className="form-check-input"
        />
        <label className="form-check-label text-warning">Done</label>
      </div>
      <button type="submit" className="btn btn-warning text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
