import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import LoginLogout from '../loginLogout'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import logo from '../../media/messageicon.png'

export default function SideNavbar() {

    const auth = useSelector(state => state.auth)
    return (
        <div className="sidenav">
            
            {/* {console.log(auth.authenticated)} */}
            
            {/* {auth.authenticated && <NavLink className="navlink" to="/login">Logout <PowerSettingsNewIcon/> </NavLink> } */}
            {/* {!auth.authenticated && <LoginLogout/>} */} 
            <img src={logo} alt="logo"/>
            <LoginLogout/>
        </div>
    )
}
