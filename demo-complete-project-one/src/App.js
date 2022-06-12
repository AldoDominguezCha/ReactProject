import React, {useState} from 'react';
import styles from './app.module.css';
import UsersList from './components/Users/UsersList/UsersList';
import AddUserForm from './components/Users/AddUserForm/AddUserForm';
import Card from './components/Users/Common/Card';
import ErrorAlert from './components/UI/ErrorAlert';
import usersData from './TestData/TestUsers.js';
import { v4 as uuid } from 'uuid';

function App() {

  const [usersState, setUsersData] = useState(usersData);
  const [errorMessageState, setErrorMessageState] = useState(false);
  const [latestUserState, setLatestUserState] = useState({name: '', age: ''});
  
  const userAdditionHandler = user => {
    
    if (user.name.trim().length === 0) {
      setErrorMessageState('Please provide a name for the user.');
      setLatestUserState(prevState => ({ ...prevState }));
      return;
    }

    if (user.age.trim().length === 0) {
      setErrorMessageState('Please provide an age value for the user.');
      setLatestUserState(prevState => ({ ...prevState }));
      return;
    }

    if (parseInt(user.age) <= 0) {
      setErrorMessageState('Please enter a valid age.');
      setLatestUserState(prevState => ({ ...prevState, age: '' }));
      return;
    }

    setUsersData(prevStateUsers => [...prevStateUsers, { id: uuid(), ...user}]);
  }

  const acceptAlertHandler = () => {
    setErrorMessageState('');
  };


  return (
    <div className={styles['main-container__background']}>
      {errorMessageState && <ErrorAlert onAccetpAlert={acceptAlertHandler} message={errorMessageState}/>}
      <Card>
        <AddUserForm onUserAddition={userAdditionHandler} name={latestUserState.name} age={latestUserState.age}/>
      </Card>
      <UsersList users={usersState}/>
    </div>
  );
}

export default App;
