import React, { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormProps {
  addTodo: AddTodo;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  // input칸에 입력값, onChange 이벤트
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // 버튼을 눌렀을 때 FormEvenet가 발생되어 새로운 Todo 추가 이벤트
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="투두를 입력해주세요"
        onChange={handleChange}
      />
      <button type="submit" className="todo-button" onClick={handleSubmit}>
        Add a todo
      </button>
    </form>
  );
};
