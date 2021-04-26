import React, { useContext, useState, useEffect } from "react";
import { TodoListContext } from "../Listcontext/TodolistcontextProvider";

const Topic = () => {
  const { addTopic, topic } = useContext(TodoListContext);

  const [inputTitle, setinputTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputTitle === "") {
      alert("Write Something!");
    } else {
      addTopic(inputTitle);
      setinputTitle("");
    }
  };
  const changeHandler = (e) => {
    setinputTitle(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control my-2"
        type="text"
        value={inputTitle}
        onChange={changeHandler}
      />
      <button
        type="submit"
        className="btn btn-warning text-white"
        placeholder="Add Topic..."
      >
        Add Topic
      </button>
    </form>
  );
};

export default Topic;
