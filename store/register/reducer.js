import { createSlice } from '@reduxjs/toolkit'
import { getSliceActions } from 'store/lib/actionCreator'
const name = 'register'
const initailState = {}

export const registerSlice = createSlice({
  name,
  initialState,
  reducers: {
    asyncRegisterRequest(state, _action) {},
    asyncRegisterSuccess(state, action) {},
    asyncRegisterFailure(state, aciont) {},
    asyncRegisterEnd(state) {},
  },
})
const { reducer } = registerSlice
export const asyncRegisterActions = getSliceActions(imageSlice, 'asyncRegister')

export default reducer
