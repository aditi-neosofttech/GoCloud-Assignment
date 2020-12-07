import logo from './logo.svg';
import './App.css';
import React, { useState,useRef } from 'react';

const App = () =>{


  const [name, setName] = useState("");
  
  const [email, setEmail] = useState("");
  
  const [type, setType] = useState("");
  
  const [isreportedUser, setisreportedUser] = useState(false);
   
  const [isSelectableAdmin, setisSelectableAdmin] = useState(false);
  const inputRefname = React.useRef(null);
  const inputRefemail = React.useRef(null);
  const inputReftype = React.useRef(null);





 function handleChangeofName(){
  var nameOfUser = inputRefname.current.value;
  setName(nameOfUser);
}

function handleChangeofEmail(){
  var emailOfUser = inputRefemail.current.value;
  setEmail(emailOfUser);
}
function handleChangeofType(){
  var typeOfUser = inputReftype.current.value;
  setType(typeOfUser);
}
function handleReportedUser(){
setisreportedUser(true);
}
function handleSelectableAdmin()
{
setisSelectableAdmin(true);
}


  return(
    <div>
   <label for="fname">Name:</label><br></br>
  <input type="text" id="fname" onChange={handleChangeofName} ref={inputRefname} ></input><br></br>
  <label for="lname">Email:</label><br></br>
  <input type="text" onChange={handleChangeofEmail} ref={inputRefemail}></input><br></br>
  <label for="lname">User Type:</label><br></br>
  <input type="text" id="lname" onChange={handleChangeofType} ref={inputReftype} ></input><br></br>
  <button id="report" onClick={handleSelectableAdmin}>Selectable administrator</button><br></br>
  <button onClick={handleReportedUser}>reporter user</button><br></br>
{isreportedUser ?<div> name:{name} email:{email} userType:{type}</div> :null}
{isSelectableAdmin ?<div> name:{name} email:{email} userType:{type}</div> :null}
  
  </div>
  );
  }



export default App;
