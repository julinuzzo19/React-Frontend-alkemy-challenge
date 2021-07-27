import {URL_API} from '../Constants';
import axios from 'axios';

export const getHeroes = async () => {
  console.log(URL_API + 1);
  return await axios.get(URL_API + 1,{
      headers:{ 'Content-Type': 'application/json' },
      mode: 'no-cors'
  }).then((res) => {
    return res;
  });
};
