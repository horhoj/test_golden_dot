export type ValuteItem = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};

export interface DataItem {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: {
    [keys: string]: ValuteItem;
  };
}

//для проверки интерфейса
// const dataItem: DataItem = {
//   Date: '2022-03-19T11:30:00+03:00',
//   PreviousDate: '2022-03-18T11:30:00+03:00',
//   PreviousURL: '//www.cbr-xml-daily.ru/archive/2022/03/18/daily_json.js',
//   Timestamp: '2022-03-19T15:00:00+03:00',
//   Valute: {
//     AUD: {
//       ID: 'R01010',
//       NumCode: '036',
//       CharCode: 'AUD',
//       Nominal: 1,
//       Name: 'Австралийский доллар',
//       Value: 76.6025,
//       Previous: 76.9346,
//     },
//     AZN: {
//       ID: 'R01020A',
//       NumCode: '944',
//       CharCode: 'AZN',
//       Nominal: 1,
//       Name: 'Азербайджанский манат',
//       Value: 61.3071,
//       Previous: 61.8077,
//     },
//   },
// };
