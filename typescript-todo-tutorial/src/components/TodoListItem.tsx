import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

// ListItem Props 설정
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
  editTodo,
}) => {
  const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  const onEdit = () => {
    editTodo(todo);
    setIsEditOn(true);
  };

  const onTodoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    setInputText(text);
  };

  const onSaveEdit = () => {
    editTodo({
      ...todo,
      text: inputText,
    });
    setIsEditOn(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSaveEdit();
    }
  };

  const dropdownOptions: Array<Option> = [
    {
      value: "Delete",
      onClick: onDelete,
      color: "red",
    },
    {
      value: "Edit",
      onClick: onEdit,
      color: "blue",
    },
  ];

  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      {/* todoList 받아오기 */}
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
        {isEditOn ? (
          <input
            className="edit-input"
            type="text"
            value={inputText}
            onChange={onTodoUpdate}
            onKeyDown={onKeyDown}
            onBlur={onSaveEdit} // 포커스 아웃될 때 수정완료
          />
        ) : (
          todo.text
        )}
      </label>
      <Dropdown options={dropdownOptions} />
    </li>
  );
};
