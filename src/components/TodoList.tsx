import { atom, useRecoilValue } from "recoil";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";

export const todoListState = atom({
    key: "todoListState",
    default: [],
  });

export function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem?.id} item={todoItem} />
      ))}
    </>
  );
}
// idangez rebase
// idangez rebase
// idangez rebase
