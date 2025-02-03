import TodosProvider from "../components/reducer-with-context/TodosProvider";
import TodoForm from "../components/reducer-with-context/TodoForm";
import TodoList from "../components/reducer-with-context/TodoList";
import TabButton from "../components/TabButton";

export default function ReducerWithContext() {
  return (
    <TodosProvider>
      <div className="flex flex-col gap-5 p-4">
        <TabButton />
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
}
