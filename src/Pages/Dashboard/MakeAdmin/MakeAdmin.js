import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] =useState('');
  const [success, setSuccess] = useState(false);

  const handleOnBlur = e =>{
    setEmail(e.target.value);
  }
  const handelAdminSubmit = e =>{
  const user = {email};
    fetch('https://infinite-tor-54657.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        console.log(data);
        setSuccess(true);
      }
    })

    e.preventDefault()
  }
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handelAdminSubmit}>
      <TextField sx={{ width: '50%', m: 1 }} label="Email" placeholder="Enter email" type="email" onBlur={handleOnBlur} variant="standard"/>
      <Button type="submit" variant="contained">Make admin</Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;