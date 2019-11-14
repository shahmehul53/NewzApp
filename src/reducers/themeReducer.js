import {themeColor} from '../assets/themes';

const initialState = {
  theme: {...themeColor.rose},
};

export default themes = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      let newState = {...state, theme: {...state.theme, ...action.payload}};
      return newState;
    default:
      return state;
  }
};
