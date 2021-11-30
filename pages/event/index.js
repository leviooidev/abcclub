import { Container, Grid, Typography,Paper,Box } from "@mui/material";
import { Fragment, useState } from "react";
import { Navbar,StickyFooter} from "../../components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

export default function Event() {


  const [eventlist, setEventList] = useState([

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

  return (
    <>
    <Navbar
    content={
      
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Paper style={{minHeight:"15vh"}}>
            <Box p={2}>
              <Typography>picture with some description of about us</Typography>
            </Box>
          </Paper>

        </Grid>

        <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
        
            <Grid item xs={10}>
             
                  
                  <List>
                    {eventlist.map((text, index) => (
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
                  </List>
                  
       
            </Grid>
        
            


        </Grid>
    



      </Grid>
       
   
    }/>
    
    </>
   
  )
}
