import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import { useEffect, useState } from 'react'

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/

// How do I start using React Hooks? 

// How do I utilize useEffect
//useEffects take 2 arguments 

function App() {

  // What will we call out state variable? 
  const [contacts, setContacts] = useState([])


  useEffect (() => {
  // What SIDE Effect do you want to perform?
    
  // Make an api call for users? Do I need to make this call more than once?
  // If YES When do you want it to change?

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount 
  
  fetch ('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json)=> setContacts(json))
  }, [])



  // We have the json data as 'json' but where do we need to bring that data

  return (
    <div className="App">
      {console.log(contacts)}
      <Sidebar />
      <Contactslist contacts = {contacts} />
    </div>
  );
}

export default App;
