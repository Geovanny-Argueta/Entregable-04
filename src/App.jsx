import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Form from '../Components/Form'
import ListUsers from '../Components/ListUsers'

function App() {

  const[users, setUsers] = useState([]);
  const[userSelected, setUserSelected] = useState(null);

  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then((res)=>setUsers(res.data))
  },[])
  console.log(users);

  const getUsers =() =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then((res)=>setUsers(res.data))
  }

  const selectUser=(user)=>{
    setUserSelected(user);
  }

  const deselectUsers=() => setUserSelected(null)

  const deleteUsers = (id) =>{
    const filterUsers = users.filter(user => user.id !== id)
    setUsers(filterUsers);
  }
/*birthday
  email
  first_name
  id
  last_name
  password */
  return (
    <div className="App">
      <Form getUsers= {getUsers} userSelected={userSelected} deselectUsers={deselectUsers}/>
      <ListUsers users={users} selectUser={selectUser}
      deleteUsers={deleteUsers}/>
    </div>
  )
}

export default App
