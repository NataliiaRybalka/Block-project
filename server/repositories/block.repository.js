import { NotFound } from "../constants/responseCodes.enum";

import { Powerbank } from '../database/models/Powerbank';

export const getBlocksWithPowerbanksRepository = async () => {
  try {
    return await Powerbank.fetchAll();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};