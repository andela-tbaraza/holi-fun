import * as types from '../actions/actionTypes';

export default function interestReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_INTEREST:
      // debugger;
      return [...state, Object.assign({}, state, action.interest)];

    default: return state;

  }
}
