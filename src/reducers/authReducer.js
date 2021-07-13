import {LOGIN,SIGNUP,LOGOUT} from '../actions/type'


const initialState = {
    name: '',
    // lastName: '',
    email: '',
    authenticating: false,
    authenticated: false,
    error: null
}

const authReducer = (state= initialState, action ) => {
    switch(action.type){
        case `${LOGIN}_REQUEST` :
            return {
                ...state ,
                authenticating:true
            }
        
        case `${LOGIN}_SUCCESS`  :
            return {
                ...state ,
                ...action.payload.user,
                authenticating:false,
                authenticated :true,
            }

            case `${LOGIN}_FAILURE`:
                return{
                    ...state,
                    authenticated: false,
                    authenticating: false,
                    error: action.payload.error
                }
                
            case `${LOGOUT}_REQUEST`:
                break;

            case `${LOGOUT}_SUCCESS`:
                return{
                    ...initialState
                }

                // break;
            case `${LOGOUT}_FAILURE`:
                return {
                    ...state,
                    error: action.payload.error
                }    

        // case SIGNUP :
        //     return{
        //         ...state,
        //         authenticating:true
        //     }

            default:
                return state
    }
}

export default authReducer;