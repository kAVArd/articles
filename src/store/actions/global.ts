import { Article } from "../../types";

export const SAGA_FETCH_ARTICLES = '[global] SAGA_FETCH_ARTICLES';
export const SET_ARTICLES = '[global] SET_ARTICLES';

export const fetchArticles = () => ({
  type: SAGA_FETCH_ARTICLES
});

export const setArticles = (articles: Article[]) => ({
  type: SET_ARTICLES,
  payload: articles,
})