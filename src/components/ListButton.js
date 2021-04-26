import React, { useContext, useState } from "react";
import { TodoListContext } from "../Listcontext/TodolistcontextProvider";

const ListButton = (props) => {
  const { topicFind, topicDelete } = useContext(TodoListContext);

  const [color, setcolor] = useState("");

  const chooseTopic = () => {
    topicFind(props.item.id);

    if (color === "") {
      setcolor("bg-secondary");
    } else {
      setcolor("");
    }
  };

  const deleteTopic = () => {
    topicDelete(props.item.id);
    // deleteTodos(props.item.id);
  };

  return (
    <div className=" row bg-secondary my-1  border mx-1">
      <button onClick={chooseTopic} className={`col-8  border p-1 ${color}`}>
        {props.item.inputTitle}
      </button>
      <button
        onClick={deleteTopic}
        className="col-4  text-white bg-warning p-1"
      >
        Delete
      </button>
    </div>
  );
};

export default ListButton;
