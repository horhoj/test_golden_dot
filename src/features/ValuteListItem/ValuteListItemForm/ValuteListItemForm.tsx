import { FC, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { dataSlice } from '../../../store/data';
import { getRoutePath } from '../../../router';
import { getValuteDataListForCharCode } from './helpers';

interface ValuteListItemFormProps {
  valuteCharCode: string;
}

export const ValuteListItemForm: FC<ValuteListItemFormProps> = ({
  valuteCharCode,
}) => {
  const data = useAppSelector(dataSlice.selectors.getDataList);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!data) {
    return null;
  }

  const valuteDataList = getValuteDataListForCharCode(data, valuteCharCode);

  return (
    <div>
      <div className="mb-2">
        <Link to={getRoutePath('ValuteListPage')}>Назад к списку валют</Link>
      </div>

      {valuteDataList === null ? (
        <div className="alert-danger p-2 rounded">
          Не возможно получиться данные для заданного кода валюты (
          {valuteCharCode})
        </div>
      ) : (
        <div>
          <h4>Курс валюты c кодом: {valuteCharCode}</h4>
          <h5>
            Единица измерения: {valuteDataList[0].valuteDataItem.Nominal}{' '}
            {valuteDataList[0].valuteDataItem.Name}
          </h5>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>№</th>
                <th>Дата торгов</th>
                <th>Цена в рублях на дату</th>
              </tr>
            </thead>
            <tbody>
              {valuteDataList.map((valuteData, index) => (
                <tr key={valuteData.date}>
                  <td>{index + 1}</td>
                  <td>{new Date(valuteData.date).toLocaleDateString()}</td>
                  <td>{valuteData.valuteDataItem.Value.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
