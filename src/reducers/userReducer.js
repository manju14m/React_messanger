import {GET_MESSAGES, GET_USERS} from '../actions/type'



const initialState = {
    loadingUsers :false,
    users : [] ,
    conversations : []

}

const userReducer = (state=initialState, action) =>{

    switch(action.type){

        case `${GET_USERS}_REQUEST` :
            // break
            return {
                ...state,
                loadingUsers :true
                
            }

        case `${GET_USERS}_SUCCESS`:
            return{
                ...state,
                users : action.payload.users,
                loadingUsers :false
            }    

        case `${GET_MESSAGES}`:
            return{
                ...state,
                conversations : action.payload.conversations
            }

        case `${GET_MESSAGES}_FAILURE`:
            return{
                ...state,
                conversations :[]
            }


        default :
        return state    
    }

}


export default userReducer;