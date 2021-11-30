import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { Navbar,StickyFooter} from "../components";


export default function Home() {
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
           
              <Grid item xs={3}>
                <Paper >
                  <Box p={2}>
                    <Typography>picture with some description of about us</Typography>
                  </Box>
                </Paper>
              </Grid>
           
              <Grid item xs={3}>
                <Paper >
                  <Box p={2}>
                    <Typography>picture with some description of about us</Typography>
                  </Box>
                </Paper>
              </Grid>


          </Grid>
          <Grid item xs={12} container spacing={2} alignItems="center" justifyContent="center">
           
            <Grid item xs={3}>
              <Paper >
                <Box p={2}>
                  <Typography>picture with some description of about us</Typography>
                </Box>
              </Paper>
            </Grid>
          
            <Grid item xs={3}>
              <Paper >
                <Box p={2}>
                  <Typography>picture with some description of about us</Typography>
                </Box>
              </Paper>
            </Grid>


        </Grid>



        </Grid>
       
   
    }/>
    
    </>
   
  )
}
