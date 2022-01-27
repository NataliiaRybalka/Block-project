import { REQUEST_POWERBANKS } from '../types/block.types';

export const getPowerbanks = () => {
  return {
    type: REQUEST_POWERBANKS
  }
};