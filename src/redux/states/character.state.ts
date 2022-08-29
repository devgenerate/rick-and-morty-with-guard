// @vendors
import { createSlice } from '@reduxjs/toolkit'

// @models
import { Character } from '@/models'

const EMPTY_CHARACTERS_STATE: Character[] = []

const charactersSlice = createSlice({
    name: 'characters',
    initialState: EMPTY_CHARACTERS_STATE,
    reducers: {
        loadCharacters: (_, action) => action.payload,
        resetCharacters: () => EMPTY_CHARACTERS_STATE
    }

})

export const { loadCharacters, resetCharacters } = charactersSlice.actions

export const charactersReducer = charactersSlice.reducer
