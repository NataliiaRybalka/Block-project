import { GET_POWERBANKS, SAVE_TO_MY_POWERBANK, RETURN_MY_POWERBANK, GET_USER_POWERBANKS, RETURN } from '../types/block.types';

const initialState = {
  powerbanks: [],
  blocks: [],
  myPowerBank: null,
  return: false,
};

export const blockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POWERBANKS:
      return {...state, powerbanks: action.payload.powerbanks, blocks: action.payload.blocks};
    
    case SAVE_TO_MY_POWERBANK:
      return {...state, myPowerBank: action.payload, return: false};

    case RETURN_MY_POWERBANK:
      return {...state, myPowerBank: null};

    case GET_USER_POWERBANKS: 
      return {...state, myPowerBank: action.payload, return: false};

    case RETURN:
      return {...state, return: true};
      
    default:
      return state; 
  }
};
