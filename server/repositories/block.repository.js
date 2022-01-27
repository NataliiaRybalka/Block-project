import { NotFound } from "../constants/responseCodes.enum";

import { Block } from "../database/models/Block";

export const getBlocksRepository = async () => {
  try {
    return await Block.fetchAll();
  } catch (e) {
    throw new Error(NotFound, 'Blocks not found');
  }
};
