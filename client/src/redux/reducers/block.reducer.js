import { GET_POWERBANKS, SAVE_TO_MY_POWERBANK, RETURN_MY_POWERBANK, GET_USER_POWERBANKS } from '../types/block.types';

const initialState = {
  powerbanks: [],
  myPowerBank: null
};

export const blockReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POWERBANKS:
      return {...state, powerbanks: action.payload};
    
    case SAVE_TO_MY_POWERBANK:
      return {...state, myPowerBank: action.payload};

    case RETURN_MY_POWERBANK:
      return {...state, myPowerBank: null};

    case GET_USER_POWERBANKS: 
      return {...state, myPowerBank: action.payload};

    default:
      return state; 
  }
};
