import { all } from 'redux-saga/effects'
import { loginSlice } from './login/reducer'
import loginSaga from './login/saga'
import registerSaga from './register/saga'

export default function* rootSaga() {
  yield all([loginSaga(), registerSaga()])
}
