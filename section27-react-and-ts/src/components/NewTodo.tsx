import classes from './NewTodo.module.css';
import React, {FormEvent} from "react";

const NewTodo: React.FC = (props) => {

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor='text'>Todo text</label>
            <input type="text" id='text'/>
            <button type='submit'>Add Todo</button>
        </form>
    );
}

export default NewTodo;