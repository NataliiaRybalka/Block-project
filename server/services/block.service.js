import { NotFound, BadRequest } from "../constants/responseCodes.enum";

import { getBlocksWithPowerbanksRepository, changePowerbankInStockRepository } from '../repositories/block.repository';
import { updateUserPowerbankRepository } from '../repositories/user.repository';

export const getBlocksService = async () => {
  try {
    return await getBlocksWithPowerbanksRepository();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};

export const changePowerbankInStockService = async (powerbankId, powerbankInStock, userId) => {
  try {
    await changePowerbankInStockRepository(powerbankId.id, powerbankInStock.in_stock);
    await updateUserPowerbankRepository(userId, powerbankId.id);

    return;
  } catch (e) {
    throw new Error(BadRequest, 'Powerblock was not updated');
  }
};
