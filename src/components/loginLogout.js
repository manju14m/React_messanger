import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
// import Sidebar from '../sidebar'
import {NavLink} from 'react-router-dom'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch, useSelector} from 'react-redux'

import {logout} from '../actions'


const useStyles = makeStyles((theme) => ({

    

    root: {
      flexGrow: 1,
    },
    
    navlink:{
        // color: "152, 23, 238 !important",
        // textDecoration: "none !important",
    },
    button:{
        fontSize: "1em",
        marginRight:"30px",
        // [theme.breakpoints.down(800)]: {
            // display:"none",
        // },
    },
    // drawerWidth: {
    //     width :"250",
    //     // height:"100vh",
    // },
    activenavlink :{
        // width: 100%;
        // color: "green !important",
      },
  }));

    // const [drawerOpen, setDrawerOpen] = useState(true)

    

export default function LoginLogout() {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const userLogout = () =>{
        dispatch(logout(auth.uid))
    }

    const classes = useStyles();
    return (
        <>
            {auth.authenticated &&
                <Button className={classes.button} color="inherit">
                    <NavLink className="navlink" to="/login" onClick={userLogout}>Logout <PowerSettingsNewIcon/> </NavLink> 
                </Button>
            }
            {/* {Console.log(auth.authenticated)} */}
            {!auth.authenticated && 
            <div>
            <Button className={classes.button} color="inherit">
                <NavLink activeClassName="activenavlink" className="navlink" to="/login" >Login <ExitToAppIcon/> </NavLink></Button>
            <Button className={classes.button} color="inherit">
              <NavLink activeClassName="activenavlink" className="navlink" to="/register">Register <PersonAddIcon/></NavLink></Button>
              </div>
            }
            {console.log(auth)}
        </>
    )
}
