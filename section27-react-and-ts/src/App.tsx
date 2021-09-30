import React from 'react';
import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";

const todos: Todo[] = [
    new Todo('Learning React'),
    new Todo('Learning Typescript'),
]

function App() {
    return (
        <div className="App">
            <Todos todos={todos}/>
        </div>
    );
}

export default App;
