import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { appSlice } from '../../store/app';
import { getRoutePath } from '../../router';
import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrap}>
      <div>Home</div>
      <div>
        <Link to={getRoutePath('TestPage', '1')}>goToTest/1</Link>
      </div>
      <div>
        <button
          type={'button'}
          onClick={() => {
            const path = getRoutePath('TestPage', '2');
            dispatch(appSlice.actions.redirect(path));
          }}
        >
          goToTest/2
        </button>
      </div>
    </div>
  );
};
