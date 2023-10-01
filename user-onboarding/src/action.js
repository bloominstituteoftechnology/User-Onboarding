import axios from "axios"

export const Adduser = (user) => {

    return axios.post("https://reqres.in/api/users",user).then(response=> response.data)

}
