import { FC } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { dataSlice } from '../../../store/data';
import { getValuteList } from '../../../helpers/dataHelpers';
import { getExchangeDiff } from './helpers';

export const ValuteListForm: FC = () => {
  const data = useAppSelector(dataSlice.selectors.getDataList);

  if (data === null) {
    return null;
  }

  const todayData = data[0];

  const todayValuteData = getValuteList(todayData);

  return (
    <div>
      <h4>
        Список курсов валют на {new Date(todayData.Date).toLocaleString()}
      </h4>
      <h5>
        Дата предыдущих торгов:{' '}
        {new Date(todayData.PreviousDate).toLocaleString()}
      </h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>№</th>
            <th>Код валюты</th>
            <th>Значение в рублях</th>
            <th>Изменение курса</th>
          </tr>
        </thead>
        <tbody>
          {todayValuteData.map((todayValuteItem, index) => {
            const exchangeDiff = getExchangeDiff(
              todayValuteItem.Previous,
              todayValuteItem.Value,
            );

            return (
              <tr
                key={todayValuteItem.ID}
                title={`${todayValuteItem.Nominal} ${todayValuteItem.Name}`}
                className="cursor-pointer"
              >
                <td>{index + 1}</td>
                <td>{todayValuteItem.CharCode}</td>
                <td>{todayValuteItem.Value.toFixed(2)}</td>
                <td className={exchangeDiff > 0 ? 'text-green' : 'text-red'}>
                  {exchangeDiff > 0 ? '+' : '-'}
                  {Math.abs(exchangeDiff).toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
