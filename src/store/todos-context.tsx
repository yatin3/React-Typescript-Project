import React, { ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string | undefined) => void;
  removeTodo: (id: string) => void;
}

interface TodosContextProviderProps {
  children: ReactNode;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string | undefined) => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string | undefined) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
