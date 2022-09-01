import React, { PropsWithChildren, useState } from "react";

import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [todosState, setTodosState] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodosState((prevoiusState) => [...prevoiusState, new Todo(todoText)]);
  };

  const removeTodoHandler = (id: string) => {
    setTodosState((previosState) => [
      ...previosState.filter((todo) => todo.id !== id),
    ]);
  };

  const contextState: TodosContextType = {
    items: todosState,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  }

  return (
    <TodosContext.Provider value={contextState}>{props.children}</TodosContext.Provider>
  );
};

export default TodosContextProvider;
