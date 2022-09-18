import { useState } from 'react';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const[dataUsers, setDataUsers] = useState([]);
  const[userSelected, setUserSelect] = useState(null); 
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setDataUsers(res.data))
  }, []);

  console.log(dataUsers);

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setDataUsers(res.data))
  }

  const addUsers = (newUser) => { 
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
    .then(() => getUsers()); 
  }

  const editUsers = (datauser) => {
    setUserSelect(datauser); 
  };

  const updateUsers = (newUser) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${newUser.id}/`, newUser)
      .then(() => getUsers())
      .catch((error) => console.log(error.response));
  };

  const deleteUsers= (idDelete) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${idDelete}/`, idDelete)
      .then(() => getUsers());
  };

  return (
    <div className="App">
      <div>
        <div className='modal'>
          <div className='container'>
          <UsersForm 
            addUser={addUsers}
            userSelected={userSelected}
            updateUser={updateUsers}
          />
          </div>
        </div>
      </div>
      <UsersList 
        dataUsers={dataUsers} 
        editUser={editUsers}
        deleteUser={deleteUsers}
      />
    </div>
  )
}

export default App
