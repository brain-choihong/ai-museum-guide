import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'store/rootSaga'
import rootReducer from 'store/rootReducer'

const store = () => {
  const devMode = process.env.NODE_ENV === 'development'
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      sagaMiddleware,
      ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    ],
    devTools: devMode,
  })
  // Next Redux Toolkit 에서 saga를 사용해야할 때
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

const setupStore = context => store()

const makeStore = context => setupStore(context)

const wrapper = createWrapper(makeStore, {
  // debug: process.env.NODE_ENV === "development", // 디버그 모드
})

export default wrapper
