import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

  


function App() {

  const [userList, setUserList] = useState([])

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {id: Math.random().toString(), name: username, age: age }]
    })
  } 


  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
