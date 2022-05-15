import { takeLeading } from 'redux-saga/effects'
import { asyncLoginActions } from './reducer'
import createRequestSaga from '../lib/createRequestSaga'
const baseUrl = '/api/login'
const loginRequestSaga = createRequestSaga(asyncLoginActions, baseUrl)

export default function* loginSaga() {
  yield takeLeading(asyncLoginActions.request, loginRequestSaga)
}
