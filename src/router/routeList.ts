import { FC } from 'react';
import { HomePage } from '../pages/HomePage';
import { Page404 } from '../pages/Page404';
import { TestPage } from '../pages/TestPage';

interface RouteItem {
  name: Routes;
  path: string;
  component: FC;
}

export type Routes = 'HomePage' | 'TestPage' | 'Page404';

export const routeList: RouteItem[] = [
  {
    name: 'HomePage',
    path: '/',
    component: HomePage,
  },

  {
    name: 'TestPage',
    path: '/test-page/:id',
    component: TestPage,
  },

  {
    name: 'Page404',
    path: '*',
    component: Page404,
  },
];
