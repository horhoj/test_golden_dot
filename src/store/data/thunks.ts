import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import { delay } from '../../utils/delay';
import { DataItem } from '../../types/dataItem';
import { SLICE_NAME } from './types';

const CACHE_LS_KEY_NAME = 'cache_name';
//ОБЯЗАТЕЛЬНО ДЕЛАЕМ ЗАДЕРЖКУ, что бы нас не забанили за большое кол-во запросов в секунду!!!!
//ТАК как мы ограничены 5 запросами в секунду, то лучше не делать больше 5 запросов в секунду,
// следовательно, задержка должна быть минимум 200 миллисекунд
const REQUEST_DELAY = 200;

export const getDataFromServer = createAsyncThunk(
  `${SLICE_NAME}/getDataFromServer`,
  async () => {
    //чтобы не дергать АПИ кэшируем результат в LS (ТОЛЬКО ДЛЯ РЕЖИМА РАЗРАБОТКИ!!!)
    const cache = localStorage.getItem(CACHE_LS_KEY_NAME);
    if (cache) {
      return JSON.parse(cache);
    }

    //сначала для запроса используем базовый URL
    let url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    //в данном массиве будет храниться список за последние 10 дней ТОРГОВ
    const result: DataItem[] = [];

    //запросы на получение данных за последние 10 дней ТОРГОВ делаем ПООЧЕРЕДНО!!!
    //так как торги идут не каждый день и единственный способ узнать какой день торгов был предыдущим,
    //это получить его из параметра PreviousURL ответа сервера для текущего дня!!!
    for (let i = 0; i < 10; i++) {
      //создаем конфигурацию запроса
      const requestConfig: AxiosRequestConfig = {
        url,
        method: 'get',
      };
      //выполняем запрос
      const response = await axios.request<DataItem>(requestConfig);
      //пушим результат в массив с результатами
      result.push(response.data);
      // получаем новый URL (добавляем название протокола, так как иначе будет редирект и повторный запрос)
      url = `https:${response.data.PreviousURL}`;
      //ОБЯЗАТЕЛЬНО ДЕЛАЕМ ЗАДЕРЖКУ, что бы нас не забанили за большое кол-во запросов в секунду!!!!
      await delay(REQUEST_DELAY);
    }

    //чтобы не дергать АПИ кэшируем результат в LS (ТОЛЬКО ДЛЯ РЕЖИМА РАЗРАБОТКИ!!!)
    localStorage.setItem(CACHE_LS_KEY_NAME, JSON.stringify(result));

    return result;
  },
);
