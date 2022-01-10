import React, { useState } from 'react';
import UserInput from './components/NameList/UserInput/UserInput';

import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const addUserHandler = (value) => {
    setUserInfo([...userInfo, value]);
  }

  return (
    <div>
      <section id="input-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="output-form"></section>
    </div>
  );
}

export default App;
