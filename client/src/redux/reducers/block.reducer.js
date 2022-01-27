import { GET_BLOCKS } from '../types/block.types';

const initialState = {
  blocks: []
};

export const blockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS:
      return {...state, blocks: action.payload};

    default:
      return state; 
  }
};
