// @vendors
import { configureStore } from '@reduxjs/toolkit';

// @models
import { User } from '@/models';

// @states
import { userReducer } from '@/redux';

export interface AppStore {
    user: User
}

export const store = configureStore<AppStore>({
    reducer: {
        user: userReducer
    }
})