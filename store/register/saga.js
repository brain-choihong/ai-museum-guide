import { takeLeading } from 'redux-saga/effects'
import { asyncRegisterActions } from './reducer'
import createRequestSaga from '../lib/createRequestSaga'
const baseUrl = '/api/register'
const registerRequestSaga = createRequestSaga(asyncRegisterActions, baseUrl)

export default function* loginSaga() {
  yield takeLeading(asyncRegisterActions.request, registerRequestSaga)
}
