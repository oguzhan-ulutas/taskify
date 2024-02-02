import React, { FC } from "react";
import "./style.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<Props> = ({ todos, setTodos }) => {
  return todos.length ? (
    <div className="todos">
      {todos.map((todo: Todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  ) : null;
};

export default TodoList;
