import React, {createContext, useContext, useState} from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};


const TodosContext = createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {},
});

export const useTodosContext = () => useContext(TodosContext);

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAddTodoHandler = (newTodoText: string) => {
        setTodos(prev => {
            return [...prev, new Todo(newTodoText)];
        })
    }

    const onRemoveTodoHandler = (id: string) => {
        setTodos(prev => {
            return prev.filter(todo => todo.id !== id);
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: onAddTodoHandler,
        removeTodo: onRemoveTodoHandler,
    }

    return (
      <TodosContext.Provider value={contextValue}>
          {props.children}
      </TodosContext.Provider>
    );
}

export default TodosContextProvider;