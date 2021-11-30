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

export default function News() {


  const [newslist, setNewsList] = useState([
    "News 1",
    "News 2",
    "News 3",
    "News 4",
    "News 5",
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
              <Paper >
                <Box p={2}>
                  
                  <List>
                    {newslist.map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
        
            


        </Grid>
    



      </Grid>
       
   
    }/>
    
    </>
   
  )
}
