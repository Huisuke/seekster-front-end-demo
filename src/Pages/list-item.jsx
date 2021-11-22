import React from "react";
import { useState, useEffect } from 'react';

function ListItem(props) {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <h2>User List: </h2>
      <br />
      <div className='container'>
        <table>
          <tr>
            <th>username</th>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
          </tr>
          
          <tbody>
            {
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListItem;
