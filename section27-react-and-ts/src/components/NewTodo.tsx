import React, {FormEvent, useRef} from "react";
import classes from './NewTodo.module.css';
import {useTodosContext} from "../store/todo-context";

const NewTodo: React.FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useTodosContext();

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            // throw an error...
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type="text" id='text' ref={todoTextInputRef}/>
            <button type='submit'>Add Todo</button>
        </form>
    );
}

export default NewTodo;