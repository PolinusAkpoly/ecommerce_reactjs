
export const apiUrl = () =>{
if (process.env.NODE_ENV === "development") {
    return 'http://localhost:5000/'
} else {
    return 'http://api.jstors.fr/'
}

}

export const webApiUrL = apiUrl()

