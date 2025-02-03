interface TodoListProps {
  todos: { id: number; text: string; done: boolean }[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
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
