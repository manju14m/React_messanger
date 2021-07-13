import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signIn} from '../../actions'
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


export default function LoginPage() {

  const classes = useStyles()

  //   const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const history = useHistory()

  const [user, setUser] = useState({
    email : "",
    password : ""

  })

  const handleChange = (event) =>{
     setUser({ 
         ...user,
         [event.target.name] : event.target.value
     })
  }
  const refresh =() =>{
    // history.push("/home")
    window.location.reload(false)

  }


  const userLogin = (e) => {
    e.preventDefault();

    if(user.email === ""){
      alert("Email is required");
      return;
    }
    if(user.password === ""){
      alert("Password is required");
      return;
    }

    dispatch(signIn(user,refresh));
    
    setUser({
      email : "",
      password : ""
  
    })

  }




    return (
      <Layout>
      <div className="container">
        <div className="form-holder">
          <h2>LogIn</h2>
          <Divider/>
          <form>
              <div className="form-group">
              <input 
              name="email"
              className="form-control"
              type="text"
              value={user.email}
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
          <p>Not a member yet? <Link to="/register">Register</Link></p>
          <div className="form-group">
          <button onClick={userLogin} className={classes.loading}>
          {auth.authenticating ?  <CircularProgress style={{color:"white"}} /> : "Login"}
          </button>
          </div>
          </form>
          </div>
      </div>
      {/* <input type="file"/> */}
      </Layout>
    )
}
