import React, { FC, FormEvent, useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
}

const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      key={todo.id}
      action=""
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        placeholder="Enter A Task"
        className="input__box"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="input_submit">Go</button>
    </form>
  );
};

export default InputField;
