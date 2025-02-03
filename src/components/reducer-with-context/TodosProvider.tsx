import { ReactNode, useReducer } from "react";
import { TodosContext, TodosDispatchContext } from "./TodosContext";
import todosReducer from "../../todoReducer";

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
