import { generatePath } from 'react-router-dom';
import { routeList, Routes } from './routeList';

export const getRoutePath = (
  routeName: Routes,
  id: string | null = null,
): string => {
  const index = routeList.findIndex(
    (routeItems) => routeItems.name === routeName,
  );

  const path = routeList[index].path;

  if (!id) {
    return path;
  }

  return generatePath(path, { id });
};
