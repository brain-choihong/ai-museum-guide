import { call, put } from 'redux-saga/effects'

export function createRequestSaga(reduceActions, api_endpoint) {
  const { success, failure, end } = reduceActions
  return function* saga(action) {
    try {
      const { payload } = action
      const response = yield call(api_endpoint, { params: payload })
      console.log(response)
      if (response.status === 200) {
        yield put(success(response.data))
      }
    } catch (error) {
      yield put(failure(error))
    } finally {
      yield put(end())
    }
  }
}
