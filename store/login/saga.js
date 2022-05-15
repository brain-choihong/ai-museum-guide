import { takeLeading } from 'redux-saga/effects'
import { asyncLoginActions } from './reducer'
import createRequestSaga from '../lib/createRequestSaga'
const baseUrl = '/login'
const loginRequestSaga = createRequestSaga(asyncLoginActions, baseUrl)

export default function* loginSaga() {
  yield takeLeading(asyncLoginActions.request, loginRequestSaga)
}
