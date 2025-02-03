import { useReducer } from "react";
import TabButton from "../components/TabButton";
import TodoForm from "../components/reducer/TodoForm";
import TodoList from "../components/reducer/TodoList";
import todosReducer from "../todoReducer";

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
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
