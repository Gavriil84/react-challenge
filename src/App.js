import React, { useState } from 'react';
import UserInput from './components/NameList/UserInput/UserInput';
import UserList from './components/NameList/UserOutput/UserList/UserList';

import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const addUserHandler = (value) => {
    setUserInfo([...userInfo, value]);
  }

  console.log(userInfo)
  return (
    <div>
      <section id="input-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="output-form">
        <UserList items={userInfo} />
      </section>
    </div>
  );

}

export default App;
