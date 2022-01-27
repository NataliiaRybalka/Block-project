import { OK } from "../constants/responseCodes.enum";
import { getBlocksService } from '../services/block.service';

export const getBlocks = async (req, res, next) => {
  try {
    res.status(OK).json(await getBlocksService());
  } catch (e) {
    next(e);
  }
};
