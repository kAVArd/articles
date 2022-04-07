import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../../store/actions';

import { Wrapper } from './styles';

const ListPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <Wrapper>Hello</Wrapper>
  )
}

export default ListPage;
