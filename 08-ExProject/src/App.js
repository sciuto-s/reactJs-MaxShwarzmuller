import React, { useState } from 'react';
import AddUsers from './compomnents/Users/AddUser';
import UserList from './compomnents/Users/UserList';

function App() {
  const [user, setUser] = useState('')

  const addUser = (username, age) => {
    // event.preventDefault()

    // if (username.trim().length === 0 || age.trim().length === 0) {
    //   return
    // }
    // if (age < 1) {
    //   return
    // }
    console.log(username, age);

    setUser({ user: username, age: age })

  }

  return (
    <div>
      <AddUsers addUserHandler={addUser}/>
      <UserList username={user.name} age={user.age}/>
    </div>
  );
}

export default App;
