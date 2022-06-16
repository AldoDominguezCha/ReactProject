import React, { useEffect, useState, useCallback, useMemo } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {

  

  const [tasks, setTasks] = useState([]);

  const httpResponseHandler = useCallback((responseObj) => {
    const loadedTasks = [];
    for (const taskKey in responseObj) {
      loadedTasks.push({ id: taskKey, text: responseObj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const requestConfig = useMemo(() => (
    { url: 'https://react-http-test-4d2b2-default-rtdb.firebaseio.com/tasks.json', }
  ), []);

  const {isLoading, error, sendRequest} = useHttp(requestConfig, httpResponseHandler);
    
    

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const taskAddHandler = useCallback((task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
