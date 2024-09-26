import React from 'react'
import { TextField,Button } from '@mui/material';
const Signup = () => {
  return (
    <div>
      <TextField variant="outlined" label="name" /><br /><br />
      <TextField variant="outlined" label="email" /><br /><br />
      <TextField variant="outlined" label="password" /><br /><br />
      <TextField variant="outlined" label="confirm password" /><br /><br />
      <Button variant="contained">submit</Button>
    </div>
  )
}

export default Signup