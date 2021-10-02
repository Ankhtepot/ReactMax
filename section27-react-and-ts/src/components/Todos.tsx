import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import {useTodosContext} from "../store/todo-context";

const Todos: React.FC = () => {
    const todosCtx = useTodosContext();

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(todo => (
                <TodoItem key={todo.id} todo={todo} onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}/>
            ))}
        </ul>
    );
};

export default Todos;