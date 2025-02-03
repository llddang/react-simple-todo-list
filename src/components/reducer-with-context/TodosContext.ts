import { createContext } from "react";
import { Todo } from "../../types.dto";

export const TodosContext = createContext<Todo[]>([]);
export const TodosDispatchContext = createContext<
  React.Dispatch<{
    type: "ADD" | "TOGGLE" | "DELETE";
    id: number;
    text: string;
  }>
>(() => {});
