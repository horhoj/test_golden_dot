import React, { useEffect } from 'react';
import { Router } from '../router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { dataSlice } from '../store/data';
import { RequestErrorMSG } from '../components/RequestErrorMSG';
import { Spinner } from './Spinner';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const getDataFromServerRequestError = useAppSelector(
    dataSlice.selectors.getRequestError,
  );

  useEffect(() => {
    dispatch(dataSlice.thunks.getDataFromServer());
  }, []);

  return (
    <>
      <Spinner />
      <div className="container">
        {getDataFromServerRequestError ? (
          <RequestErrorMSG
            title={'Не удалось загрузить данные по валютам'}
            requestError={getDataFromServerRequestError}
          />
        ) : null}
        <div className="p-2">
          <Router />
        </div>
      </div>
    </>
  );
};
