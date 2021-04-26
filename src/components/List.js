import React, { useContext } from "react";
import ListButton from "./ListButton";
import { TodoListContext } from "../Listcontext/TodolistcontextProvider";
import ListForm from "./ListForm";

const List = () => {
  const { topic, selectTopic } = useContext(TodoListContext);

  return (
    <div className="col">
      <div className="row">
        <div className="col-md-4 py-2 bg-dark">
          {topic.map((item) => {
            return <ListButton item={item} key={item.id} />;
          })}
        </div>
        <div className="col-md-8 py-2">
          {selectTopic?.todos.map((form) => {
            return (
              <ListForm
                issue={form.issue}
                tasks={form.tasks}
                isDone={form.isDone}
                key={form.id}
                keyId={form.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
