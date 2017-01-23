import * as types from './actionTypes';

export function createInterest(interest) {
  return { type: types.CREATE_INTEREST, interest };
}
