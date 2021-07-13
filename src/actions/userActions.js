import { GET_USERS, GET_MESSAGES } from './type'
import firebase from '../firebase'



export const getUsers = (uid) => {

    console.log('uid', uid)

    return async (dispatch) => {

        dispatch({
            type: `${GET_USERS}_REQUEST`
        });

        const db = firebase.firestore();
        // const unsubscribe = 
        db.collection("users")
            //.where("uid", "!=", uid)
            .onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach((doc) => {
                    if (doc.data().uid !== uid) {
                        users.push(doc.data());
                    }
                });
                //console.log(users);

                dispatch({
                    type: `${GET_USERS}_SUCCESS`,
                    payload: { users }
                });

            });

        // return unsubscribe;

    }

}

export const updateMessages = (msgObj) => {
    return async dispatch => {

        const db = firebase.firestore();
        const timestamp = firebase.firestore.FieldValue.serverTimestamp()
        db.collection('conversations')
            .add({
                ...msgObj,
                isView: false,
                createdAt: new Date().getTime()
            })
            .then((data) => {
                console.log(data)
                //success
                // dispatch({
                //     type: userConstants.GET_REALTIME_MESSAGES,
                // })


            })
            .catch(error => {
                console.log(error)
            });

    }
}

export const getMessages = (user) => {
    return async dispatch => {

        const db = firebase.firestore();
        db.collection('conversations')
            // .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
            .orderBy('createdAt', 'asc')
            .onSnapshot((querySnapshot) => {

                const conversations = [];

                querySnapshot.forEach(doc => {

                    // if(
                    //     (doc.data().user_uid_1 === user.uid_1 && doc.data().user_uid_2 === user.uid_2)
                    //     || 
                    //     (doc.data().user_uid_1 === user.uid_2 && doc.data().user_uid_2 === user.uid_1)
                    // ){
                    //     conversations.push(doc.data())
                    // }

                    conversations.push(doc.data())


                    // if(conversations.length > 0){

                    // }else{
                    //     dispatch({
                    //         type: `${userConstants.GET_REALTIME_MESSAGES}_FAILURE`,
                    //         payload: { conversations }
                    //     })
                    // }




                });

                dispatch({
                    type: GET_MESSAGES,
                    payload: { conversations }
                })

                // console.log(conversations);
            })
        //user_uid_1 == 'myid' and user_uid_2 = 'yourId' OR user_uid_1 = 'yourId' and user_uid_2 = 'myId'
        // dispatch({
        //     type: GET_MESSAGES,
        //     payload: { conversations }
        // })

    }
}