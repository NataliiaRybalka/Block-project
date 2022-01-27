import { NotFound } from "../constants/responseCodes.enum";

import { getBlocksRepository } from '../repositories/block.repository';

export const getBlocksService = async () => {
  try {
    return await getBlocksRepository();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};
