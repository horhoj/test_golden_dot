import React, { useEffect } from 'react';
import { Router } from '../router';
import { useAppDispatch } from '../store/hooks';
import { dataSlice } from '../store/data';
import styles from './App.module.scss';
import { Spinner } from './Spinner';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataSlice.thunks.getDataFromServer());
  }, []);

  return (
    <>
      <Spinner />
      <div className={styles.wrap}>
        <Router />
      </div>
    </>
  );
};
