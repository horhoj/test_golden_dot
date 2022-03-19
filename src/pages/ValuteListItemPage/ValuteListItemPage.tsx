import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { ValuteListItemForm } from '../../features/ValuteListItem/ValuteListItemForm';

export const ValuteListItemPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <ValuteListItemForm valuteCharCode={String(id)} />
    </>
  );
};
