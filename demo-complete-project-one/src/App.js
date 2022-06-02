import React from 'react';
import styles from './app.module.css';
import UsersList from './components/Users/UsersList/UsersList';


function App() {
  const users = [
    {
      name: 'Aldo',
      age: 26,
    },
    {
      name: 'Juan',
      age: 18,
    },
    {
      name: 'Pollo',
      age: 23,
    }
  ]

  return (
    <div className={styles['main-container__background']}>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
