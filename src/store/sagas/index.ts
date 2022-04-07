import { all } from 'redux-saga/effects';
import { watchGlobal } from './global';

export default function* rootSaga() {
  yield all([
    watchGlobal(),
  ])
}