

export const getInitStore = () => {
    let isAuth = false
    let tokenData = ""
    let userData = ""


     let auth = localStorage.getItem("auth")
// if (auth) {
    
    // tokenData= JSON.parse(auth).token
    // userData= JSON.parse(auth).userId
    // isAuth= !!tokenData && !!userData

// }

 if (auth) {
    
 const { token, userId} = JSON.parse(auth)

 isAuth= !!token && !!userId
 if (isAuth) {
    tokenData= token
    userData= userId
 }
   
}

    return {
        isAuth: isAuth,
        token: tokenData,
        userId: userData
    }


}



