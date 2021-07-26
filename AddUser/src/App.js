import React, { useState } from 'react';
import AddUser from './Users/AddUser'
import UsersList from './Users/UsersList';


function App() {

  const[userList,setUserList]= useState([]);

  const addUserHandler = (uName,uAge) => {
    setUserList(prevUserList => {
      return [...prevUserList,{name:uName,age:uAge}]
    })
  }
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users = {userList}/>
    </div>
  );
}

export default App;
