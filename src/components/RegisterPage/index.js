import React,{useState,} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{Link, useHistory} from 'react-router-dom'
import {signUp} from '../../actions'
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout/layout'




const useStyles = makeStyles((theme) => ({
  loading:{
      display: 'flex',
      alignItems: "center",
      justifyContent:"center",
      color: "white",
      height:"40px",
      padding:"0 30%",
  },
  error:{
      color:"red",
      fontSize: "0.8em",

  }
}));




export default function RegisterPage() {

const classes = useStyles()

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  // const history = useHistory()

  const [user, setUser] = useState({
    name : "",
    email : "",
    password : ""

  })

  const handleChange = (event) =>{
     setUser({ 
         ...user,
         [event.target.name] : event.target.value
     })
  }

  const registerUser = (e) => {
    
    e.preventDefault();

    // const user = {
    //   firstName, lastName, email, password
    // }
    if(user.name === ""){
      alert("Name is required");
      return;
    }

    if(user.email === ""){
      alert("Email is required");
      return;
    }
    if(user.password === ""){
      alert("Password is required");
      return;
    }
    
    dispatch(signUp(user))
    // history.push("/home")
    setUser({
      name : "",
      email : "",
      password : ""
  
    })
  }


    return (
      <Layout>
        <div className="container">
          <div className="form-holder">
            <h2>Register</h2>
            <Divider/>
            <form>
                <div className="form-group">
                <input 
                name="name"
                className="form-control"
                type="text"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
                />
            </div>
            {/* <div className="form-group">
            <input 
              name="lastName"
              className="form-control"
              type="text"
              value={user.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            </div> */}

            <div className="form-group">
            <input 
              name="email"
              className="form-control"
              type="text"
              value={user.lastName}
              onChange={handleChange}
              placeholder="Email"
            />
            </div>

            <div className="form-group">
            <input 
              name="password"
              className="form-control"
              type="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            </div>
            <p>Already a member yet? <Link to="/login">Login</Link></p>
            <div className="form-group">

            <button onClick={registerUser} className={classes.loading}>
              {/* Register */}
              {auth.authenticating ?  <CircularProgress  style={{color:"white"}} /> : "Register"}
              </button>
            </div>
            </form>
            </div>
        </div>
        </Layout>
    )
}
