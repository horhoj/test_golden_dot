import { DataItem, ValuteItem } from '../../../types/dataItem';

export const getExchangeDiff = (
  prevValue: number,
  currentValue: number,
): number => {
  const onePercent = prevValue / 100;
  return (currentValue - prevValue) / onePercent;
};

export const getValuteList = (dataItem: DataItem): ValuteItem[] => {
  const valuteCharCodeList = Object.keys(dataItem.Valute);

  return valuteCharCodeList.map(
    (valuteCharCode) => dataItem.Valute[valuteCharCode],
  );
};
