import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {

  const [messageState, setMessageState] = useState(false);
  const [allowToggleState, setAllowToggleState] = useState(false);

  console.log('APP RUNNING');

  const buttonClickHAndler = useCallback(() => {
    if (allowToggleState) {
      setMessageState(prevState => !prevState);
    }
  }, [allowToggleState]);

  const allowToggleHandler = () => {
    setAllowToggleState(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={messageState}/>
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={buttonClickHAndler}>Toggle message</Button>
    </div>
  );
}

export default App;
