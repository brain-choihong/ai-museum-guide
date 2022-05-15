import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from '@reduxjs/toolkit'
import login from './login/reducer'
import register from './register/reducer'
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    default: {
      const combineReducer = combineReducers({
        login,
        register,
      })
      return combineReducer(state, action)
    }
  }
}

export default rootReducer
