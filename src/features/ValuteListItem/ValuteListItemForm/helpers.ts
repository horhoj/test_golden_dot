import { DataItem, ValuteItem } from '../../../types/dataItem';

interface currentValuteDataItem {
  date: string;
  valuteDataItem: ValuteItem;
}

export const getValuteDataListForCharCode = (
  data: DataItem[],
  valuteCharCode: string,
): currentValuteDataItem[] | null => {
  const dataForCharCode: currentValuteDataItem[] = [];
  let error = false;
  data.forEach((dataItem) => {
    const valuteData = dataItem.Valute[valuteCharCode];
    if (!valuteData) {
      error = true;
    }
    dataForCharCode.push({
      date: dataItem.Date,
      valuteDataItem: { ...valuteData },
    });
  });

  if (error) {
    return null;
  }

  return dataForCharCode;
};
