import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routeList } from './routeList';
import { RedirectExecutor } from './RedirectExecutor';
import { getRoutePath } from './helpers';

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path={'/'}
          element={<Navigate to={getRoutePath('ValuteListPage')} />}
        />
        {routeList.map((route) => (
          <Route
            path={route.path}
            key={route.name}
            element={<route.component />}
          />
        ))}
      </Routes>
      <RedirectExecutor />
    </>
  );
};
