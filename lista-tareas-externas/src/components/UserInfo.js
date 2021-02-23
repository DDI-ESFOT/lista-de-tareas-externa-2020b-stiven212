import React from 'react';

const UserInfo = ({user}) => {
    return(
        <div>
            <h1>Información del usuario</h1>

            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.website}</li>
                <li>{user.phone}</li>
            </ul>
        </div>
    );
};

export default UserInfo;