
import { CONNECTED, LOGOUT } from '../actions/actionTypes';
import { AuthAction } from '../actions/types';
import { getInitStore } from '../lib/initLib';



const initStore = getInitStore()


const initAction: AuthAction = {
    type: LOGOUT,
    payload: initStore
    }
export const authReducers = (state = initStore,  action: AuthAction = initAction) =>{
switch (action.type) {
    case CONNECTED:
        state = {
            isAuth: true,
            token: action.payload.token,
            userId: action.payload.userId
        }
        return state
        break;
        case LOGOUT:
            localStorage.removeItem("auth")
            state = {
                isAuth: false,
                token: "",
                userId: ""
            }
            return state
            break;
    default:
        return state
        break;
}




}









