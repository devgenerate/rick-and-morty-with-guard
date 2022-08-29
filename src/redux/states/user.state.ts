// @vendors
import { createSlice } from '@reduxjs/toolkit'

// @models
import { User } from '@/models'

const EMPTY_USER_STATE: User = {
    id: 0,
    name: '',
    email: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState: EMPTY_USER_STATE,
    reducers: {
        createUser: (_, action) => action.payload,
        updateUser: (state, action) => ({ ...state, ...action.payload }),
        resetUser: () => ({ ...EMPTY_USER_STATE })
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export const userReducer = userSlice.reducer