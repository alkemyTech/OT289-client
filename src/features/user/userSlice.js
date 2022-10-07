import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_PATH } from '../../utils/constants'

export const userSlice = createSlice({
    name: "user",
    initialState : {},
    reducers: {
        login: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.image = action.payload.image
            state.roleId = action.payload.roleId
            state.token = action.payload.token
        }, 
        logout: (state) => {
            delete state.id
            delete state.email
            delete state.firstName
            delete state.lastName
            delete state.image
            delete state.roleId
            delete state.token
        },
        refresh: (state, action) => {
            const token = localStorage.getItem('token')
            if (token) {
                let user;
                const token = action.payload
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}` 
                    }
                }
                
                axios.get(`${BASE_PATH}/auth/me`, config)
                    .then(data => user = data)
                        .catch(error => console.log(error))

                if (user) {
                    state.id = user.payload.id
                    state.email = user.payload.email
                    state.firstName = user.payload.firstName
                    state.lastName = user.payload.lastName
                    state.image = user.payload.image
                    state.roleId = user.roleId
                    state.token = token
                }
            }
        }

    }
})

export const { login, logout, refresh } = userSlice.actions
export default userSlice.reducer