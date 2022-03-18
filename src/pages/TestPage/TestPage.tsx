import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const TestPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>TestPage - {id}</div>;
};
