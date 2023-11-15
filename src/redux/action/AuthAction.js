import {LOGIN} from '../actiontypes/AuthTypes';

export const setUserLogin = (user,token) => dispatch => {
  console.log('userLogin', user);
  console.log('tokenLogin', token);
  dispatch({type: LOGIN, userLogin: user, token:token});
};