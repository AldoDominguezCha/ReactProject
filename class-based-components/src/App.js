import UserFinder from "./components/UserFinder";
import UsersContext from "./user-context/user-context";

function App() {
  const usersContext = {
    users: [
        {id:'u1',name:'Max'},
        {id:'u2',name:'Manuel'},
        {id:'u3',name:'Julia'},
        {id:'u4',name:'Aldo'},
        {id:'u5',name:'Jorge'}
    ],
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
