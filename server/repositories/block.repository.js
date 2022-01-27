import { NotFound, BadRequest } from "../constants/responseCodes.enum";

import { Powerbank } from '../database/models/Powerbank';

export const getBlocksWithPowerbanksRepository = async () => {
  try {
    return await Powerbank.fetchAll();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};

export const changePowerbankInStockRepository = async (id, in_stock) => {
  try {
    return await Powerbank.forge({ id }).save({ in_stock });
  } catch (e) {
    throw new Error(BadRequest, 'powerbank was not updated');
  }
};
