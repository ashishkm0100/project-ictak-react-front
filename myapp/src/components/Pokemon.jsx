import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Pokemon = () => {

    var [user, setuser] = useState([])

    axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
            setuser(response.data)
        }
        )

  return (
      <div>
          <br /><br />
          <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {user.map((val) => {
                      return (
                          <Grid item xs={4}>
                                  <Card sx={{ maxWidth: 345 }}>
                                      <CardMedia
                                          sx={{ height: 140 }}
                                          image={val.image_url}
                                          title={val.pokemon}
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                              {val.pokemon}
                                          </Typography>
                                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                              Type : {val.type} <br />
                                              Abilities : {val.abilities}
                                          </Typography>
                                      </CardContent>
                                  </Card>
                          </Grid>
                      )
                  })}   
              </Grid>
          </Box>
          
    </div>
  )
}

export default Pokemon
