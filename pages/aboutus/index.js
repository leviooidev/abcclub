import { Container, Grid, Typography,Paper,Box } from "@mui/material";
import { Fragment } from "react";
import { Navbar,StickyFooter} from "../../components";


export default function AbousUs() {
  return (
    <>
    <Navbar
    content={
      
      <Grid container spacing={2}>

      <Grid item xs={12}>
        <Paper style={{minHeight:"30vh"}}>
          <Box p={2}>
            <Typography>picture with some description of about us</Typography>
          </Box>
        </Paper>

      </Grid>

      <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
       
          <Grid item xs={8}>
            <Paper >
              <Box p={2}>
                <Typography>Description</Typography>
              </Box>
            </Paper>
          </Grid>
       
          <Grid item xs={8}>
            <Paper >
              <Box p={2}>
                <Typography>Description</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={8}>
            <Paper >
              <Box p={2}>
                <Typography>Description</Typography>
              </Box>
            </Paper>
          </Grid>


      </Grid>
   



    </Grid>
   
       
   
    }/>
    
    </>
   
  )
}
