
import axios from "axios"

/**
 * register user call
 */
export const registerUserCall = async (userdata : {
    username : string,
    password : string,
    email : string
}) => {
    try {
        const res = await axios.post("/api/auth/register", {
            username : userdata.username,
            password : userdata.password,
            email : userdata.email
        })

        return res.data
    } catch (error) {
        throw new Error(`signup error ${error}`)
    }
}