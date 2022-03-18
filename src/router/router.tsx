import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeList } from './routeList';
import { RedirectExecutor } from './RedirectExecutor';

export const Router: FC = () => {
  return (
    <>
      <Routes>
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
