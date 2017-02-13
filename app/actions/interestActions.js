import * as types from './actionTypes';
import interestsApi from '../api/mockInterestsApi';

export function loadInterestsSuccess(interests) {
  return { type: types.LOAD_INTERESTS_SUCCESS, interests };
}

export function loadInterests() {
  return (dispatch => {
    return interestsApi.getAllInterests().then(data => {
      dispatch(loadInterestsSuccess(data));
      console.log('data', dispatch(loadInterestsSuccess(data)));
    }).catch(err => {
      throw (err);
    });
  });
}
