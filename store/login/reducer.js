import { createSlice } from '@reduxjs/toolkit'
import { getSliceActions } from 'store/lib/actionCreator'
const name = 'login'
const initailState = {}

export const loginSlice = createSlice({
  name,
  initialState,
  reducers: {
    asyncLoginRequest(state, _action) {},
    asyncLoginSuccess(state, action) {},
    asyncLoginFailure(state, aciont) {},
    asyncLoginEnd(state) {},
  },
})
const { reducer } = loginSlice
export const asyncLoginActions = getSliceActions(imageSlice, 'asyncLogin')

export default reducer
