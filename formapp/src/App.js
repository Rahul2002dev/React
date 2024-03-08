import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function App() {

  // const [firstName,setFirstName] = useState("");
  // const [LastName,setlastName] = useState("");
  // function firstchangehandler(event){
    // console.log(event.target.value);
    // setFirstName(event.target.value);
  // }
  // function lastchangehandler(event){
    // setlastName(event.target.value);
  // }

  const [formData,setFromData] = useState (
    {
      firstName:"",
      lastName:"",
      email:"",
      Comment:"",
      isVisible:true,
      mode:"",
      fevcar:""
    }
  );

  console.log(formData);


  function changehandler(event){
    const {name,value,checked,type} = event.target;
    setFromData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type ==="checkbox" ? checked : value
      }
    });
  }

  function submithandler(event){
    event.preventDefault();
    console.log("printing the form data");
    console.log(formData);
  }

  return(
  <div className='App'>
      <form onSubmit={submithandler}>
        <input type='text' placeholder='first name' onChange={changehandler} name="firstName" value={formData.firstName}/>

        <br/>
        <br/>

        <input type='text' placeholder='last name' onChange={changehandler} name="lastName" value={formData.lastName}/>

        <br/>
        <br/>

        <input type='email' placeholder='Enter your email here' onChange={changehandler} name="email" value={formData.email}/>

        <br/>
        <br/>
        <textarea
        placeholder='enter your comments'
        onChange={changehandler}
        name="Comment"
        value={formData.Comment}
        />

        <br/>
        <br/>
        <input type='checkbox' onChange={changehandler} name='isVisible' id='isVisible' checked={formData.isVisible}/>
        <label htmlFor='isVisible'>Am i visible ?</label>

        <br/>
        <fieldset>
          <legend>Mode:</legend>
        <input type='radio' onChange={changehandler} name='mode' value='online- Mode' id='online-mode' checked={formData.mode === 'online-mode'}/>

<label htmlFor='online-mode'>online mode</label>

<input type='radio' onChange={changehandler} name='mode' value='offline- Mode' id='offline-mode' checked={formData.mode === "offline-mode"}/>

<label htmlFor='offline-mode'>offline mode</label>

        </fieldset>
        <br/>
        <label>Tell me your Favourite Car</label>
        <select name ="fevcar" id='fevcar' value={formData.fevcar} onChange={changehandler}>
          <option value="scarpio">Scarpio</option>
          <option value="fortuner">fortuner</option>
          <option value="thar">thar</option>
          <option value="defender">defender</option>
          <option value="legender">legender</option>
          <option value="G wagon">G wagon</option>
        </select>

        <br/>
        <button>Submit</button>
      </form>
  </div> 
  );
}

export default App;
