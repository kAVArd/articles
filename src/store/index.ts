import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import global from './reducers/global';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    global,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);