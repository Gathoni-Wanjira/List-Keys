import React from 'react'


const UsersComponent = () => {
    const users = ['Bob', 'Nick', 'jay', 'Liam']
    
    
    const usersList = users.map((user) => {
        return  <li>{user}</li>
    })
    return <ul>{usersList}</ul>
}
export default UsersComponent;