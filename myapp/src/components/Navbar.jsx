import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
              <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6">My App</Typography>
                  <Link to='/l'>
                      <Button color="inherit">Login</Button>
                  </Link>
                  <Link to='/s'>
                      <Button color="inherit">Signup</Button>
                  </Link>
                  <Link to='/state'>
                      <Button color="inherit">State</Button>
                  </Link>
                   <Link to='/e'>
                      <Button color="inherit">counter</Button>
                  </Link>
                   <Link to='/a'>
                      <Button color="inherit">Api</Button>
                  </Link>
                   <Link to='/p'>
                      <Button color="inherit">pokemon</Button>
                  </Link>
                  </Toolbar>
              </AppBar>
    </div>
  )
}

export default Navbar
