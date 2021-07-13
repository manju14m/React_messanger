import React,{useEffect} from 'react'
import './App.scss';
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import {Redirect, Route , Switch} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {loggedInUser} from './actions'
import Main from './components/main'
function App() {

  const auth = useSelector(state => state.auth.authenticated)
  const dispatch = useDispatch()
  const user = localStorage.getItem('chatapp') ? JSON.parse(localStorage.getItem('chatapp')) : null;

  let isLoggedIn = user === null ? false : true
  // isLoggedIn = auth || user;
  // console.log(auth || user)

//   isLoggedIn && dispatch(loggedInUser())

useEffect(()=>{
  dispatch(loggedInUser())
  // console.log("useeffect")
})

  return (
    <div>
      {/* Hello */}
      {/* {console.log(auth)} */}
      <Switch>

                <Route path="/login">
                    {isLoggedIn && <Redirect to="/" />}
                    {!isLoggedIn && <LoginPage/>}
                    {/* {document.title ="signin"} */}
                </Route>

                <Route path="/register" >
                        {isLoggedIn && <HomePage /> }
                        {!isLoggedIn && <RegisterPage />}
                </Route>

                <Route path="/">
                    {isLoggedIn && <HomePage /> }
                    {!isLoggedIn && <Redirect to="/login" />}
                    {/* {/* {document.title ="home"} */}
                </Route> 

                <Route path="*">
                        <Redirect to="/"></Redirect>
                </Route>
      </Switch>
    </div>
  );
}

export default App;
