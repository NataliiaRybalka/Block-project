import { REQUEST_POWERBANKS, SAVE_TO_MY_POWERBANK, CHANGE_POWERBANK_IN_STOCK } from '../types/block.types';

export const getPowerbanks = () => {
  return {
    type: REQUEST_POWERBANKS
  }
};

export const saveToMyPowerbank = powerbankId => {
  return {
    type: SAVE_TO_MY_POWERBANK,
    payload: powerbankId
  }
};

export const changePowerbankInStock = powerbank => {
  return {
    type: CHANGE_POWERBANK_IN_STOCK,
    payload: powerbank
  }
};
