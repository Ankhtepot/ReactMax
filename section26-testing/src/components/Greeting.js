// import classes from './Greeting.module.css';

import {useState} from 'react';
import Output from './Output';

function Greeting(props) {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(prevState => !prevState);
    };

    return (
        <div>
            <h2>Hello World!</h2>
            {changeText
                ? <Output>Changed!</Output>
                : <Output>It's good to see you!</Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}

export default Greeting;