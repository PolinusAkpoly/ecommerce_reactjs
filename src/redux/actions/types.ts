import { CONNECTED, LOGOUT } from './actionTypes';

interface userConnectedData {
    token: string
    userId: string
}


export interface AuthAction {
type: typeof CONNECTED | typeof LOGOUT,
payload: userConnectedData 
}