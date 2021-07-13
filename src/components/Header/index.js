// import React from 'react'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SideNavbar from '../SideNavbar'
import LoginLogout from '../loginLogout'
import logo from '../../media/messageicon.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    height: "70px",
    top: "0",
    zIndex: "100",
    //   z-index:"30 !important",
  },
  appbar: {
    backgroundColor: "white !important",
    // color:
    '& img': {
      width: "40px",
      height: "40px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down(780)]: {
      display: "inline",
    },
  },
  title: {
    marginLeft: "5px",
    flexGrow: 1,
  },
  navlink: {
    color: "white",
    textDecoration: "none",
  },
  button: {
    fontSize: "1em",
    [theme.breakpoints.down(780)]: {
      display: "none",
    },
  },
  drawerWidth: {
    width: "250",
    // height:"100vh",
  },
  loginlogout: {
    // '& div':{
    [theme.breakpoints.down(780)]: {
      display: "none",
    },
    // },
    fontSize: "1em",
  },
}));


export default function Header() {

  const [drawerOpen, setDrawerOpen] = useState(false)

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt="logo" />
          <Typography variant="h6" className={classes.title}>
            Web messanger
          </Typography>
          <div className={classes.loginlogout}>
            <LoginLogout />
          </div>

          {/* <Button className={classes.button} color="inherit"><NavLink activeClassName="activenavlink" className="navlink" to="/login" >Login</NavLink></Button>
          <Button className={classes.button} color="inherit"><NavLink activeClassName="activenavlink" className="navlink" to="/register">Register</NavLink></Button> */}
          <IconButton edge="end" className={classes.menuButton}
            onClick={() => setDrawerOpen(true)}
            color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <div className={classes.drawerWidth}>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} >
            {/* hello */}
            <SideNavbar />
          </Drawer>
        </div>
      </AppBar>
    </div>
  )
}
