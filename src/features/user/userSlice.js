import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

export const userSlice = createSlice({
    name: "user",
    initialState : {},
    reducers: {
        login: (state, action) => {
          const decodedToken = jwtDecode(action.payload)
          state.id = decodedToken.id
          state.email = decodedToken.email
          state.token = action.payload
        }, 
        logout: (state) => {
            delete state.id
            delete state.email
            delete state.token
        },
        refresh: (state) => {
            const token = localStorage.getItem('token')
            if (token) {
                const decodedToken = jwtDecode(token)
                state.id = decodedToken.id
                state.email = decodedToken.email
                state.token = token
            }
        }

    }
})

export const { login, logout, refresh } = userSlice.actions
export default userSlice.reducer