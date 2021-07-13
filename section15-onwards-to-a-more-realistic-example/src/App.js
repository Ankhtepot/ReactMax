import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";

function App() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const {isLoading, error, sendRequest: fetchTasks} = useHttp();

    useEffect(() => {
        const transformTasks = tasksObj => {
            const loadedTasks = [];

            Object.keys(tasksObj).forEach(key => {
                loadedTasks.push({id: key, text: tasksObj[key].text});
            });

            setTasks(loadedTasks);
        };

        fetchTasks(
            {url: 'https://react-http-65df3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'},
            transformTasks
        );
    }, [fetchTasks]);

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler}/>
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
