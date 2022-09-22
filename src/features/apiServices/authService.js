import axios from 'axios'
const authUrl = 'http://localhost:3001/auth'

const authAxios = axios.create({
    baseURL: authUrl
})

const postServices = {
    // checkEmail: async (data) => {
    //     return authAxios("/checkEmail", data)
    // },
    // checkPassword: async (data) => {
    //     return authAxios("/checkPassword", data)
    // },
    register: async (data) => {
        return authAxios("/register", data)
    },
    login: async (data) => {
        return authAxios("/login", data)
    }
}


export default postServices;