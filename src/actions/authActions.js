import {LOGIN, SIGNUP,LOGOUT} from './type'

// import {auth} from '../firebase.js'
// import {  auth, firestore } from '../firebase';
import firebase from '../firebase'


export const signUp = (user) => {
    return (dispatch) =>{
        const db = firebase.firestore();

        dispatch({type: `${LOGIN}_REQUEST`});

        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
            console.log(data);
            const currentUser = firebase.auth().currentUser;
            // const name = ;
            currentUser.updateProfile({
                displayName: `${user.name}`
            })
            .then(() => {
                //if you are here means it is updated successfully
                // console.log("updating colection")
                db.collection('users')
                .doc(data.user.uid)
                .set({
                    name: user.name,
                    // lastName: user.lastName,
                    uid: data.user.uid,
                    createdAt: new Date(),
                    isOnline: true
                })
                .then(() => {
                    //succeful
                    const loggedInUser = {
                        name: user.name,
                        // lastName: user.lastName,
                        uid: data.user.uid,
                        email: user.email
                    }
                    localStorage.setItem('chatapp', JSON.stringify(loggedInUser));
                    console.log('User logged in successfully...!');
                    dispatch({
                        type: `${LOGIN}_SUCCESS`,
                        payload: { user: loggedInUser }
                    })
                    window.location.reload(false)
                })
                .catch(error => {
                    console.log(error);
                    dispatch({ 
                        type: `${LOGIN}_FAILURE`,
                        payload: { error }
                      });
                });
            });
        })
        .catch(error => {
            console.log(error);
        })


    }

}


export const signIn = (user,refresh) => {
    return async dispatch => {
        const db = firebase.firestore();
        dispatch({ type: `${LOGIN}_REQUEST` });
        firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            console.log(data);
            console.log("logged in")

            
            db.collection('users')
            .doc(data.user.uid)
            .update({
                isOnline: true
            })
            .then(() => {
                // const name = data.user.displayName.split(" ");
                // const firstName = name[0];
                // const lastName = name[1];
                console.log("updated online")
                const loggedInUser = {
                    name:data.user.displayName,
                    // lastName,
                    uid: data.user.uid,
                    email: data.user.email
                }

                localStorage.setItem('chatapp', JSON.stringify(loggedInUser));

                dispatch({
                    type: `${LOGIN}_SUCCESS`,
                    payload: { user: loggedInUser }
                });
                refresh()
                {console.log("loggedin")}
            })
            .catch(error => {
                console.log(error)
            })


        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: `${LOGIN}_FAILURE`,
                payload: { error }
            })
        })
        


    }
}

export const loggedInUser = () => {
    return async dispatch => {

        const user = localStorage.getItem('chatapp') ? JSON.parse(localStorage.getItem('chatapp')) : null;

        if(user){
            dispatch({
                type: `${LOGIN}_SUCCESS`,
                payload: { user }
            });
        }else{
            dispatch({
                type: `${LOGIN}_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }


    }
}

export const logout = (uid) => {
    return async dispatch => {
        const db = firebase.firestore();
        // dispatch({ type: `${LOGOUT}_REQUEST` });
        //Now lets logout user

        
        db.collection('users')
        .doc(uid)
        .update({
            isOnline: false
        })
        .then(() => {

            firebase.auth()
            .signOut()
            .then(() => {
                //successfully
                localStorage.clear();
                dispatch({type: `${LOGOUT}_SUCCESS`});
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: `${LOGOUT}_FAILURE`, payload: { error } })
            })

        })
        .catch(error => {
            console.log(error);
        })
    }
}

