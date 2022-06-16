import { useCallback } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const { onAddTask } = props;

  const requestConfig = {
    url: 'https://react-http-test-4d2b2-default-rtdb.firebaseio.com/tasks.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    //body: { text: '' },
  };

  const enterTaskHandler = taskText => {
    requestConfig.body = { text: taskText };
    sendRequest();
  };
  
  const httpResponseHandler = (response) => {
    const generatedId = response.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: requestConfig.body.text };
      onAddTask(createdTask);
  }; 


  const {isLoading, error, sendRequest} = useHttp(requestConfig, httpResponseHandler);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
