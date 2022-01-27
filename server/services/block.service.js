import { NotFound } from "../constants/responseCodes.enum";

import { getBlocksWithPowerbanksRepository } from '../repositories/block.repository';

export const getBlocksService = async () => {
  try {
    return await getBlocksWithPowerbanksRepository();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};
