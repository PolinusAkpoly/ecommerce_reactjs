import { GlobalState } from "./globalState"

export const getAuthState = (state: GlobalState) => state.auth.isAuth

export const getAuthToken = (state: GlobalState) => state.auth.token


