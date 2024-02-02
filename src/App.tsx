import { FC, FormEvent, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: uuidv4(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
