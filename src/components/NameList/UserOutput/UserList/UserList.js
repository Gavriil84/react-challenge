import React from 'react';
import UserItem from '../UserItem/UserItem';

import './UserList.module.css';

const UserList = props => {
    return (
        <ul className="user-list">
            {props.items.map(item => (
                <UserItem
                    key={item.name}
                    id={item.name}
                >
                    {item}
                </UserItem>
            ))}
        </ul>
    );
}

export default UserList;