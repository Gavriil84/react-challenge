import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './UserInput.module.css';

const UserInput = (props) => {
    const [userName, setUserName] = useState('');
    const [nameValid, setNameValid] = useState(true);

    const [userAge, setUserAge] = useState('');
    const [ageValid, setAgeValid] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setNameValid(false);
            return;
        }
        props.onAddUser({ name: userName, age: userAge });

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <div>
                    <label>User Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" />
                </div>
            </div>
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default UserInput;