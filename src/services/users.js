import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const getUserData = async (token) => {
    const config = {
        headers: { 
            Authorization: `Bearer ${token}`
        }
    }

    return await axios.get(`${API_BASE_URL}/auth/me`, config)
}

const userService = { getUserData }

export default userService
