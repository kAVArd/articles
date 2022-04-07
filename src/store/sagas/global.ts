import { call, delay, put, takeLatest, all } from 'redux-saga/effects';

import { httpGet } from '../../services';
import { IFormatResponse } from '../../types';
import { SAGA_FETCH_ARTICLES } from '../actions';

export function* watchGlobal() {
  yield takeLatest(SAGA_FETCH_ARTICLES, fetchArticles);
}

export function* fetchArticles() {
  const getArticles = async () => {
    return await httpGet('list/0');
  }

  try {
    const res: IFormatResponse<any> = yield call(getArticles);
    console.log(res);

  } catch (e) {
    console.log(e);
  }
}