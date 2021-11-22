import React from "react";

function DeleteItem(props) {

  return (
    <div>
      <h2>Delete User</h2>
      <br />
      <div className='container'>
          <div className='form-group'>
              <label>name:</label>
              <input type='text' name='name' />
          </div>
          <div className='form-group'>
              <label>email:</label>
              <input type='text' name='email' />
          </div>
      </div>
    </div>
  );
}

export default DeleteItem;
