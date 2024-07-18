import React from "react";

// ListItem Props 설정
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
}) => {
  return (
    <li className={todo.complete ? "todo-row completed" : "todo-row"}>
      {/* todoList 받아오기 */}
      <label>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
        />
      </label>
      {todo.text}
    </li>
  );
};
