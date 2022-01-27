import { NotFound, BadRequest } from "../constants/responseCodes.enum";

import { getBlocksWithPowerbanksRepository, changePowerbankInStockRepository } from '../repositories/block.repository';
import { updateUserPowerbankRepository, getUserPowerbankRepository } from '../repositories/user.repository';

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

    const powerbankIdForUser = !powerbankInStock.in_stock ? powerbankId.id : null;
    await updateUserPowerbankRepository(userId, powerbankIdForUser);

    return;
  } catch (e) {
    throw new Error(BadRequest, 'Powerblock was not updated');
  }
};

export const getUserPowerbankService = async (userId) => {
  try {
    return await getUserPowerbankRepository(userId.userId);
  } catch (e) {
    throw new Error(BadRequest, 'Powerblock was not updated');
  }
};
