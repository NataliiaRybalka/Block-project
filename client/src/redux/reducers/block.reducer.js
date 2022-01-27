import { GET_POWERBANKS } from '../types/block.types';

const initialState = {
  powerbanks: []
};

export const blockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POWERBANKS:
      return {...state, powerbanks: action.payload};

    default:
      return state; 
  }
};
