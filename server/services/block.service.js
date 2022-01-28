import { getBlocksRepository, getBlocksWithPowerbanksRepository, changePowerbankInStockRepository, getPowerbankByIdRepository } from '../repositories/block.repository';
import { updateUserPowerbankRepository, getUserPowerbankRepository } from '../repositories/user.repository';

export const getBlocksService = async () => {
  try {
    const powerbanks = await getBlocksWithPowerbanksRepository();
    const blocks = await getBlocksRepository();

    return {
      powerbanks,
      blocks
    }
  } catch (e) {
    throw new ErrorHandler(e.status, e.message);
  }
};

export const changePowerbankInStockService = async (powerbankId, powerbank, userId) => {
  try {
    await changePowerbankInStockRepository(powerbankId.id, powerbank.in_stock, powerbank.block_id);

    const powerbankIdForUser = !powerbank.in_stock ? powerbankId.id : null;
    await updateUserPowerbankRepository(userId, powerbankIdForUser);

    return await getPowerbankByIdRepository(powerbankId.id);
  } catch (e) {
    throw new ErrorHandler(e.status, e.message);
  }
};

export const getUserPowerbankService = async (userId) => {
  try {
    return await getUserPowerbankRepository(userId.userId);
  } catch (e) {
    throw new ErrorHandler(e.status, e.message);
  }
};
