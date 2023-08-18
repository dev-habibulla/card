import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  let [name, setName] = useState("")
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let [adress, setAdress] = useState("")

  let [open, setOpen] = useState(true);


  let handleNameChange = (e) => {
    setName(e.target.value)

  }
  let handlePhoneChange = (e) => {
    setPhone(e.target.value)

  }
  let handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  let handleAddressChange = (e) => {
    setAdress(e.target.value)
  }


  let handleLogin = () => {
    
    setOpen(false)
    
  };


  return (

    <div className='card'>

      {open
        ?
        <div className='testboxx'>
          <TextField onChange={handleNameChange} name="name" className="inputcssstyle" type="text" id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField onChange={handlePhoneChange} name="phone" className="inputcssstyle" type="text" id="outlined-basic" label="Phone number" variant="outlined" />
          <TextField onChange={handleEmailChange} name="email" className="inputcssstyle" type="email" id="outlined-basic" label="Email Address" variant="outlined" />
          <TextField onChange={handleAddressChange} name="adress" className="inputcssstyle" type="text" id="outlined-basic" label="Address" variant="outlined" />

          <Button onClick={handleLogin} className="loginsbtn" variant="contained">Submit.</Button>
        </div>
        :
        <div className="template">
          <div className="content">
            <h6 className='name'>{name}</h6>
            <h6 className='phone'>{phone}</h6>
            <h6 className='email'>{email}</h6>
            <h6 className='adress'>{adress}</h6>
          </div>
        </div>
      }

    </div>


  )
}

export default App
