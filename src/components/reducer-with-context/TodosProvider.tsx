import { ReactNode, useReducer } from "react";
import { Todo } from "../../types/types.dto";
import { TodosContext, TodosDispatchContext } from "./TodosContext";

export default function TodosProvider({ children }: { children?: ReactNode }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
}

function todosReducer(
  todos: Todo[],
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
