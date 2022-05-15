import { createSlice } from '@reduxjs/toolkit'
import { getSliceActions } from 'store/lib/actionCreator'
const name = 'reducer/login'
const initialState = {
  email: '',
  password: '',
  loginLoading: true,
  loginSuccess: false,
  loginEnd: false,
  loginFailure: false,
}

export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    asyncLoginRequest(state, _action) {
      state.loginLoading = true
    },
    asyncLoginSuccess(state, action) {
      state.loginSuccess = action.payload
    },
    asyncLoginFailure(state, _action) {
      state.loginFailure = true
    },
    asyncLoginEnd(state) {
      state.loginLoading = false
    },
  },
})
const { reducer } = loginSlice
export const asyncLoginActions = getSliceActions(loginSlice, 'asyncLogin')

export default reducer
