import { useContext, useState } from "react";
import { TodosDispatchContext } from "./TodosContext";

export default function TodoForm() {
  const [text, setText] = useState<string>("");
  const dispatch = useContext(TodosDispatchContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: "ADD", id: Date.now(), text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <input
        placeholder="할 일을 입력해주세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-md border border-gray-500 px-1"
      />
      <button>생성</button>
    </form>
  );
}
