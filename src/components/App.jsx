import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({fName: "",lName: "",email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target

    setContact((preValue) => ({ ...preValue,[name] : value }));
  }

  function handleClick(event){
    console.log('Form Was submitted with following details : '+ JSON.stringify(contact))
    event.preventDefault()
  }
  return (
    <div className="container">
       {/* if you wish, you can remove h1 and p tag */}
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p> {contact.email}</p>
      <form>
        <input onChange = {handleChange} value = {contact.fName} name = "fName" placeholder = "First Name" />
        <input onChange = {handleChange} value = {contact.lName} name = "lName" placeholder = "Last Name" />
        <input onChange = {handleChange} value = {contact.email} name = "email" placeholder = "Email" />
        <button onClick = {handleClick} type = 'submit'> Submit </button>
      </form>
    </div>
  );
}

export default App;