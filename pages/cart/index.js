import { Container, Grid, Typography,Paper,Box,Divider } from "@mui/material";
import { Fragment, useState } from "react";
import { Navbar,StickyFooter} from "../../components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Cart() {


  const [cartlist, setCartList] = useState([

    {
      "date":"2021-01-01",
      "time":"12:00:00",
      "title":"Title 1",
      "venue":"Venue 1"
    },
    {
      "date":"2021-01-01",
      "time":"12:00:00",
      "title":"Title 2",
      "venue":"Venue 2"
    },
    {
      "date":"2021-01-01",
      "time":"12:00:00",
      "title":"Title 3",
      "venue":"Venue 3"
    },
    {
      "date":"2021-01-01",
      "time":"12:00:00",
      "title":"Title 4",
      "venue":"Venue 4"
    }
  ]);

  // const itemData = [
  //   {
  //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //     productname: 'Breakfast',
  //     price: 1.00,
  //     qty: 1,
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //     productname: 'Breakfast',
  //     price: 12.00,
  //     qty: 2,
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //     productname: 'Breakfast',
  //     price: 300.00,
  //     qty: 5,
  //   },
  //   {
  //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  //     productname: 'Breakfast',
  //     price: 38.00,
  //     qty: 9,
  //   },

   
  // ];

  return (
    <>
    <Navbar
    content={
      
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Paper >
            <Box minHeight={100} p={2} display="flex" alignItems="center" justifyContent="center">
              <Typography>Cart</Typography>
            </Box>
          </Paper>

        </Grid>

        <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
        
            <Grid item xs={10}>
              <Paper >
                
              <List >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Product Name 1"
                    secondary={
                      <Fragment>
                        <Box>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Price: RM100.00
                          <br/>
                          Quantity: 100
                        </Typography>
                        </Box>
                      </Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Product Name 2"
                    secondary={
                      <Fragment>
                        <Box>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Price: RM100.00
                          <br/>
                          Quantity: 100
                        </Typography>
                        </Box>
                      </Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Product Name 3"
                    secondary={
                      <Fragment>
                        <Box>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Price: RM100.00
                          <br/>
                          Quantity: 100
                        </Typography>
                        </Box>
                      </Fragment>
                    }
                  />
                </ListItem>
              </List>


              <Divider/>

              <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>

                    <Typography>Total: RM300.00</Typography>

              </Box>

              </Paper>
             
                  
                  {/* <List>
                    {cartlist.map((text, index) => (
                      <Paper style={{marginBottom:"10px"}}>
                        <ListItem button key={text.title}>
                          <ListItemIcon>
                            <InboxIcon />
                          </ListItemIcon>
                          <ListItemText 
                            primary={text.date}
                            secondary={
                              <Fragment>
                                  <Typography>{text.time}</Typography>
                                  <Typography>{text.title}</Typography>
                                  <Typography>{text.venue}</Typography>
                              </Fragment>
                            } 
                            />
                        </ListItem>
                      </Paper>
                    ))}
                  </List> */}
                  
       
            </Grid>
        
            


        </Grid>
    



      </Grid>
       
   
    }/>
    
    </>
   
  )
}
