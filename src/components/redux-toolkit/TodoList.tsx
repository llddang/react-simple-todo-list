import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../../store/todos.slice";
import { RootState } from "../../store/redux";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos).todos;
  const dispatch = useDispatch();

  function handleToggleTodo(id: number) {
    dispatch(toggleTodo(id));
  }

  function handleDeleteTodo(id: number) {
    dispatch(deleteTodo(id));
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span className={todo.done ? "text-gray-600 line-through" : ""}>
            {todo.text}
          </span>
          <button
            onClick={() => handleDeleteTodo(todo.id)}
            className="rounded-md border border-gray-500 bg-gray-100 px-1 text-sm hover:bg-gray-400 active:bg-gray-200"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
