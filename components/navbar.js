import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Apptheme } from '../styles';
import StickyFooter from './footer';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const Navbar = (props) => {
    const router = useRouter();
    return (
        <ThemeProvider theme ={Apptheme.theme}>
            <Box sx={{ display: 'flex',minHeight:"100vh" }}>
            <CssBaseline />
            <AppBar
                color="white"
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Box display="flex"  flexGrow={1} justifyContent="flex-end" >
                        
                        <Box mx={2}>
                            <Button variant="contained" color="secondary"
                            onClick={
                                ()=>{
                                    router.push('/cart')
                                }    
                            }>
                                Cart
                            </Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="secondary"
                            onClick={
                                ()=>{
                                    router.push('/signin')
                                }    
                            }>Sign In</Button>
                        </Box>
                    
                    </Box>
        
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
            
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        ABC Club
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
        

                    <ListItem button key={"Home"}
                    onClick={
                        ()=>{
                            router.push('./')
                        }    
                    }
                    >
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Home"} />
                    </ListItem>
                
                    <ListItem button key={"About Us"}
                    onClick={
                        ()=>{
                            router.push('/aboutus')
                        }    
                    }>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"About Us"} />
                    </ListItem>

                    <ListItem button key={"Member"}
                    onClick={
                        ()=>{
                            router.push('/member')
                        }    
                    }>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Member"} />
                    </ListItem>

                    <ListItem button key={"News"}
                    onClick={
                        ()=>{
                            router.push('/news')
                        }    
                    }>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"News"} />
                    </ListItem>

                    <ListItem button key={"Event"}
                    onClick={
                        ()=>{
                            router.push('/event')
                        }    
                    }>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Event/Activity"} />
                    </ListItem>
                    <ListItem button key={"Gallery"}
                    onClick={
                        ()=>{
                            router.push('/gallery')
                        }    
                    }>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Gallery"} />
                    </ListItem>
                    <ListItem button key={"Products"}
                    onClick={
                        ()=>{
                            router.push('/products')
                        }    
                    }>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Products"} />
                    </ListItem>
                </List>
                
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {props.content}
                
            </Box>
            
            </Box>
            <StickyFooter/>
        </ThemeProvider>
        
    );
}

export default Navbar;