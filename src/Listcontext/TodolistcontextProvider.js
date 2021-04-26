import React, { createContext, useState } from "react";
import uuid from "uuid";
export const TodoListContext = createContext();

const TodolistcontextProvider = (props) => {
  // TOPIC PART
  const [topic, setTopic] = useState([]);
  const addTopic = (inputTitle) => {
    setTopic((prevTopic) => [
      ...prevTopic,
      { id: uuid(), inputTitle, todos: [] },
    ]);
  };
  // FIND AND DELETE TOPIC
  const [selectTopic, setSelectTopic] = useState(null);
  const topicFind = (id) => {
    const topicSelector = topic.find((item) => item.id === id);
    setSelectTopic(topicSelector);
  };

  const topicDelete = (id) => {
    const newTopics = topic.filter((item) => item.id !== id);
    setTopic(newTopics);
    if (selectTopic.id === id) {
      setSelectTopic(null);
    }
  };

  // FORM PART
  const addForm = (task, topicId) => {
    if (editResult) {
      const newTopics = JSON.parse(JSON.stringify(topic));
      const selectedTopic = newTopics.find((item) => item.id === topicId);
      selectedTopic.todos = selectedTopic.todos.map((item) => {
        if (editResult.id === item.id) {
          return { ...task, id: editResult.id };
        } else {
          return item;
        }
      });

      seteditResult(null);
      setTopic(newTopics);
      setSelectTopic(selectedTopic);
    } else {
      const newTopics = [...topic];
      const selectedTopic = newTopics.find((item) => item.id === topicId);
      // selectedTopic.todos.push({ ...task, id: uuid() })
      selectedTopic.todos = [...selectedTopic.todos, { ...task, id: uuid() }];
      setTopic(newTopics);
    }
  };

  //DELETE AND EDIT FORM
  const deleteForm = (keyId) => {
    const newTopics = [...topic];
    const selectedTopic = newTopics.find((item) => item.id === selectTopic.id);
    const result = selectedTopic.todos.filter((item) => item.id !== keyId);
    selectedTopic.todos = result;
    setTopic(newTopics);
  };
  const [editResult, seteditResult] = useState(null);
  const editForm = (keyId) => {
    const newTopics = [...topic];
    console.log(newTopics);
    const selectedTopic = newTopics.find((item) => item.id === selectTopic.id);
    const result = selectedTopic.todos.find((item) => item.id === keyId);
    seteditResult(result);
  };

  return (
    <TodoListContext.Provider
      value={{
        topic,
        addTopic,
        addForm,
        topicFind,
        topicDelete,
        selectTopic,
        deleteForm,
        editForm,
        editResult,
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodolistcontextProvider;
