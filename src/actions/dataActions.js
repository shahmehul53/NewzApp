import axios from 'axios';
import {LOAD_DATA_START} from './Types';
import {LOAD_DATA_SUCCESS} from './Types';
import {LOAD_DATA_FAIL} from './Types';
import {LOAD_DATA_START_CAT} from './Types';
import {LOAD_DATA_SUCCESS_CAT} from './Types';
import {LOAD_DATA_FAIL_CAT} from './Types';

let API_KEY = 'dc45002677a54c89a8a182306f8af069';

export const loadData = () => {
  return (dispatch, getState) => {
    dispatch({type: LOAD_DATA_START});
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
      .then(response => {
        console.log('data is', response);
        dispatch({type: LOAD_DATA_SUCCESS, payload: response.data.articles});
      })
      .catch(error => {
        dispatch({type: LOAD_DATA_FAIL, payload: error});
      });
  };
};

export const loadCategory = query => {
  return (dispatch, getState) => {
    dispatch({type: LOAD_DATA_START_CAT});
    axios
      .get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
      .then(response => {
        console.log('category is', response);
        dispatch({
          type: LOAD_DATA_SUCCESS_CAT,
          payload: response.data.articles,
          q: query,
        });
      })
      .catch(error => {
        dispatch({type: LOAD_DATA_FAIL_CAT, payload: error});
      });
  };
};

export const changeTheme = theme => {
  console.log('action idhar hai', theme);
  return {
    type: 'CHANGE_THEME',
    payload: theme,
  };
};
