import { useState } from "react";

interface InputFormProps {
  onSubmit: (todo: string) => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [todo, setTodo] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(todo);
    resetTodo();
  }

  function resetTodo() {
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <input
        placeholder="할 일을 입력해주세요."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 rounded-md border border-gray-500 px-1"
      />
      <button className="rounded-md border border-gray-500 bg-gray-100 px-1 hover:bg-gray-400 active:bg-gray-200">
        생성
      </button>
    </form>
  );
}
