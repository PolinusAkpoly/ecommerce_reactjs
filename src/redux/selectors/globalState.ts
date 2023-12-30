

interface AuthData {
isAuth: boolean,
token: string,
userId: string
}

export interface GlobalState {
auth: AuthData

}