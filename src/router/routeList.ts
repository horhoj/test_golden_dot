import { FC } from 'react';
import { ValuteListPage } from '../pages/ValuteListPage';
import { Page404 } from '../pages/Page404';

interface RouteItem {
  name: Routes;
  path: string;
  component: FC;
}

export type Routes = 'ValuteListPage' | 'Page404';

export const routeList: RouteItem[] = [
  {
    name: 'ValuteListPage',
    path: '/valute-list',
    component: ValuteListPage,
  },

  {
    name: 'Page404',
    path: '*',
    component: Page404,
  },
];
