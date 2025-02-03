import TodoForm from "../components/redux-toolkit/TodoForm";
import TodoList from "../components/redux-toolkit/TodoList";
import TabButton from "../components/TabButton";

export default function RTK() {
  return (
    <div className="flex flex-col gap-5 p-4">
      <TabButton />
      <TodoForm />
      <TodoList />
    </div>
  );
}
