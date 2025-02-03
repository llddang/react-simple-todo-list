import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todos.slice";
import { AppDispatch } from "../../store/redux";

export default function TodoForm() {
  const [text, setText] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addTodo(text));
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
