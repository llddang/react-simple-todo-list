import { useReducer } from "react";
import TabButton from "../components/TabButton";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

export default function Reducer() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddTodo(text: string) {
    dispatch({ type: "ADD", id: Date.now().valueOf(), text });
  }

  function handleToggleTodo(id: number) {
    dispatch({ type: "TOGGLE", id, text: "" });
  }

  function handleDeleteTodo(id: number) {
    dispatch({ type: "DELETE", id, text: "" });
  }

  return (
    <div className="flex flex-col gap-5 p-4">
      <TabButton />
      <InputForm onSubmit={handleAddTodo} />
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

function todosReducer(
  todos: { id: number; text: string; done: boolean }[],
  action: { type: "ADD" | "TOGGLE" | "DELETE"; id: number; text: string },
) {
  switch (action.type) {
    case "ADD":
      return [...todos, { id: action.id, text: action.text, done: false }];
    case "TOGGLE":
      return todos.map((t) =>
        t.id === action.id ? { ...t, done: !t.done } : t,
      );
    case "DELETE":
      return todos.filter((t) => t.id !== action.id);
    default:
      throw Error("Unknown action: " + action.type);
  }
}
