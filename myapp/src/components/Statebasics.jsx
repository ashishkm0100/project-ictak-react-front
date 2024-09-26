import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Statebasics = () => {
  var [fname, setfname] = useState("welcome")
  var [lname, setlname] = useState("Ashish")
  
  const handleInput = (e) => {
    console.log(e.target.value)
    setfname(e.target.value)
  }

  const handleinput = (e) => {
    setlname(fname)
  }
  return (
    <div>
      <Typography variant='h4'>{fname} {lname}</Typography>
      <TextField variant='outlined' onChange={handleInput} />
      <Button variant='contained' onClick={handleinput} > Submit</Button>
      
    </div>
  )
}

export default Statebasics
