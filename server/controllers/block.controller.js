import { OK } from "../constants/responseCodes.enum";
import { getBlocksService, changePowerbankInStockService } from '../services/block.service';

export const getBlocks = async (req, res, next) => {
  try {
    res.status(OK).json(await getBlocksService());
  } catch (e) {
    next(e);
  }
};

export const changePowerbankInStock = async (req, res, next) => {
  try {
    await changePowerbankInStockService(req.params, req.body, req.userId)
    res.status(OK).json('OK');
  } catch (e) {
    next(e);
  }
};
