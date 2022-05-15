import { createSlice } from '@reduxjs/toolkit'
import { getSliceActions } from 'store/lib/actionCreator'
const name = 'register'
const initialState = {
  email: '',
  password: '',
  name: '',
  registerLoading: true,
  registerSuccess: false,
  registerEnd: false,
  registerFailure: false,
}

export const registerSlice = createSlice({
  name,
  initialState,
  reducers: {
    asyncRegisterRequest(state, _action) {},
    asyncRegisterSuccess(state, action) {},
    asyncRegisterFailure(state, action) {},
    asyncRegisterEnd(state) {},
  },
})
const { reducer } = registerSlice
export const asyncRegisterActions = getSliceActions(
  registerSlice,
  'asyncRegister'
)

export default reducer
