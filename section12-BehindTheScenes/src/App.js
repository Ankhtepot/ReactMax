import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/DemoOutput/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('App running.');

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prev => !prev);
        }
    }, [allowToggle]);

    const allowToggleHandler = useCallback(() => {
        setAllowToggle(true);
    }, []);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph}/>
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
        </div>
    );
}

export default App;
