import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import Topic from "./components/Topic";
import TodolistcontextProvider from "./Listcontext/TodolistcontextProvider";

function App() {
  return (
    <TodolistcontextProvider>
      <div className="App">
        <div className="container text-white">
          <Header />
          <div className="row my-5">
            <div className="col-md-4 py-5 bg-secondary">
              <Topic />
            </div>
            <div className="col-md-8 py-4 bg-secondary border-left">
              <Form />
            </div>
          </div>
          <h3 className="row text-warning my-3">ToDos</h3>
          <div className="row bg-warning text-white">
            <List />
          </div>
        </div>
      </div>
    </TodolistcontextProvider>
  );
}

export default App;
