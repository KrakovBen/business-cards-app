import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActions, CardActionArea, Divider, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';


function MyCard() {
  return (
    <>
    <Card sx={{ maxWidth: 300, textAlign: 'left', margin: "10px" }}>
      <CardActionArea>
        <CardMedia component="img" height="194" image="/assets/images/Card.jpg" alt="Paella dish" />
        <CardContent>
            <Typography variant="h5" component="h1">Forth</Typography>
            <Typography sx={{fontWeight: 400, marginBottom: "10px"}} color="gray" variant="p" component="h2">Subtitle</Typography>
            <Divider orientation='horizontal'/>
            <Typography sx={{fontWeight: 400, marginTop: "10px"}} color="gray" variant="p" component="h2"><Typography fontWeight="600" component="span">Phone:</Typography> 0500000000</Typography>
            <Typography sx={{fontWeight: 400}} color="gray" variant="p" component="h2"><Typography fontWeight="600" component="span">Address:</Typography> This is my Address</Typography>
            <Typography sx={{fontWeight: 400}} color="gray" variant="p" component="h2"><Typography fontWeight="600" component="span">Card Number:</Typography> 123456789</Typography>
        </CardContent>
        <CardActions>
          <Grid p={1} container justifyContent="space-between">
            <span>
              <DeleteIcon />
              <EditIcon />
            </span>
            <span>
              <PhoneIcon />
              <FavoriteIcon />
            </span>
          </Grid>
        </CardActions>
      </CardActionArea>
    </Card>
    </>
  )
}

export default MyCard