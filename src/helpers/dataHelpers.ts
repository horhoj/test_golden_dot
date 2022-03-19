import { DataItem, ValuteItem } from '../types/dataItem';

export const getValuteList = (dataItem: DataItem): ValuteItem[] => {
  const valuteCharCodeList = Object.keys(dataItem.Valute);

  return valuteCharCodeList.map(
    (valuteCharCode) => dataItem.Valute[valuteCharCode],
  );
};
