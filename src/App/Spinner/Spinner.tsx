import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { dataSlice } from '../../store/data';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  //ЕСЛИ ХОТЯ БЫ 1 из данных флагов равен true, то будет показан индикатор загрузки
  const dataIsLoading = useAppSelector(dataSlice.selectors.getIsLoading);

  const isLoading = dataIsLoading;

  return isLoading ? <div className={styles.Spinner} /> : null;
};
