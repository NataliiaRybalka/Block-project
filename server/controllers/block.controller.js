import { OK } from "../constants/responseCodes.enum";
import { getBlocksService, changePowerbankInStockService, getUserPowerbankService } from '../services/block.service';
import { io } from "../app";

export const getBlocks = async (req, res, next) => {
  try {
    res.status(OK).json(await getBlocksService());
  } catch (e) {
    next(e);
  }
};

export const changePowerbankInStock = async (req, res, next) => {
  try {
    const powerbanks = await changePowerbankInStockService(req.params, req.body, req.userId);
    io.emit('update_powerbank_position', powerbanks);
    res.status(OK).json('OK');
  } catch (e) {
    next(e);
  }
};

export const getUserPowerbank = async (req, res, next) => {
  try {
    res.status(OK).json(await getUserPowerbankService(req.params));
  } catch (e) {
    next(e);
  }
};