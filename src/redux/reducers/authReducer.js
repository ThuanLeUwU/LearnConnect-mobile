import {LOGIN} from '../actiontypes/AuthTypes';
const initialState = {
  userLogin: null,
  token: null,
};
export default function authReducer(state = initialState, action) {
  console.log('authReducer type: ', action.type);
  console.log('authReducer: ', action);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userLogin: action.userLogin,
        token: action.token,
      };

    default: {
      return state;
    }
  }
}
