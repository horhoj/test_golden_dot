import { FC } from 'react';
import { ValuteListPage } from '../pages/ValuteListPage';
import { Page404 } from '../pages/Page404';
import { ValuteListItemPage } from '../pages/ValuteListItemPage';

interface RouteItem {
  name: Routes;
  path: string;
  component: FC;
}

export type Routes = 'ValuteListPage' | 'ValuteListItemPage' | 'Page404';

export const routeList: RouteItem[] = [
  {
    name: 'ValuteListPage',
    path: '/valute-list',
    component: ValuteListPage,
  },

  {
    name: 'ValuteListItemPage',
    path: '/valute-list-item/:id',
    component: ValuteListItemPage,
  },

  {
    name: 'Page404',
    path: '*',
    component: Page404,
  },
];
