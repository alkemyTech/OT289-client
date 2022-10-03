import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_PATH } from '../../utils/constants'

export const userSlice = createSlice({
    name: "user",
    initialState : {},
    reducers: {
        login: (state, action) => { 
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
            state.roleId = user.payload.roleId
            state.token = action.payload
          }
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