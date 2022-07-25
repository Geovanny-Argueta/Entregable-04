import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = ({ getUsers, userSelected, deselectUsers }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setBirthday(userSelected.birthday);
    }
  }, [userSelected]);

  const resetUsers=()=>{
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setBirthday("");
  }

  const submit = (e) => {
    e.preventDefault();
    const usersSubmit = {
      first_name: name,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,
    };
    if (userSelected !== null) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          usersSubmit
        )
        .then(() => {
            getUsers();
            resetUsers();
            deselectUsers();
        });
    } else {
      axios
        .post('https://users-crud1.herokuapp.com/users/', usersSubmit)
        .then(() => {
            getUsers()
            resetUsers()
        })
        .catch(error => console.log(error.response))
    }
  };

  const clearUsers = ()=>{
    resetUsers();
    deselectUsers();
  }

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <h1>Users</h1>
        <div className="inputContainer">
          <label htmlFor="first_name">First Name : </label>
          <input
            type="text"
            id="first_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="last_name">Last Name : </label>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="birthday">Birthday : </label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div >
       <div className="buttonModify">
       <button className="create"><i class="fa-solid fa-user-plus"></i></button>
        <button className="erase" type="button" onClick={clearUsers}><i class="fa-solid fa-eraser"></i></button>
       </div>
      </div>
    </form>
  );
};

export default Form;
