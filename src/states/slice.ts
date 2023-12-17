import {createSlice, Draft} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthenticationState {
  backdrop: boolean
}

const initialState: AuthenticationState = {
  backdrop: false,
}


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    backDropAction: (state:Draft<AuthenticationState>, action: PayloadAction<AuthenticationState["backdrop"]>) => {
      state.backdrop = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { backDropAction } = appSlice.actions

export default appSlice.reducer