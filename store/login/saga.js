import { takeLeading } from 'redux-saga/effects'
import { asyncLoginActions } from './reducer'

const baseUrl = '/login'
const loginRequestSaga = ''

export default function* loginSaga() {
  yield takeLeading(asyncLoginActions.request, loginRequestSaga)
}
