import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction,Draft } from '@reduxjs/toolkit'

function deepEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        return false; // Non-object values cannot be compared this way
    }

    const keys1 = Object.keys(obj1);
    // const keys2 = Object.keys(obj2);

    // if (keys1.length !== keys2.length) {
    //     return false; // Check if both objects have the same number of properties
    // }

    for (const key of keys1) {
        if (typeof obj1[key] !== typeof obj2[key]) {
            return false; // Check if types of values for the same key are the same
        }
    }

    return true;
}
function getInitialState():AuthenticationState {
    const userFromStorage= JSON.parse(localStorage.getItem("user"))
    if ( deepEqual({token: "string"},userFromStorage) ) return {
        user: userFromStorage,
    }
    localStorage.removeItem("user")
    return { user:null }
}
export interface User {
        email: string
        name: string
        token: string
}

export interface AuthenticationState {
    user: User|null
}

const initialState: AuthenticationState =getInitialState()

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        loginAction: (state:Draft<AuthenticationState>, action: PayloadAction<User>) => {
            localStorage.setItem("user",JSON.stringify(action.payload));
            state.user = action.payload
        },
        logoutAction: (state:Draft<any>) => {
            localStorage.removeItem("user");
            state.user = null
        }
    },
})

// Action creators are generated for each case reducer function
export const {loginAction,logoutAction} = authenticationSlice.actions

export default authenticationSlice.reducer