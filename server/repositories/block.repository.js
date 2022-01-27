import { NotFound, BadRequest } from "../constants/responseCodes.enum";

import { Block } from '../database/models/Block';
import { Powerbank } from '../database/models/Powerbank';

export const getBlocksRepository = async () => {
  try {
    return await Block.fetchAll();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};

export const getBlocksWithPowerbanksRepository = async () => {
  try {
    return await Powerbank.fetchAll();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};

export const changePowerbankInStockRepository = async (id, in_stock, block_id) => {
  try {
    return await Powerbank.forge({ id }).save({ in_stock, block_id });
  } catch (e) {
    throw new Error(BadRequest, 'powerbank was not updated');
  }
};
