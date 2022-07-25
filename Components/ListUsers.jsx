import React from "react";

const ListUsers = ({ users, selectUser, deleteUsers }) => {
  return (
    <div>
      <h1>List Users</h1>
      <ul className="ListUserMain">
        {users.map((user) => (
          <li className="ListUsersLI" key={user.id}>
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <div className="ListUserDiv">
              <b>Email : </b>
              {user.email}
            </div>
            <div className="ListUserDiv">
              <b>Password : </b>
              {user.password}
            </div>
            <div className="ListUserDiv">
              <b>Birthday : </b>
              {user.birthday}
            </div>
            <div className="ListUserButoon">
              <button className="add" onClick={() => selectUser(user)}>
                <i class="fa-solid fa-user-pen"></i>
              </button>
              <button className="delete" onClick={() => deleteUsers(user.id)}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;
