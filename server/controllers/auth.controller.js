import { Created, OK } from '../constants/responseCodes.enum';
import { createUserService, loginUserService } from '../services/auth.service';

export const createUser = async (req, res, next) => {
  try {
    res.status(Created).json(await createUserService(req.body));
  } catch (e) {
    next(e);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    res.status(OK).json(await loginUserService(req.body));
  } catch (e) {
    next(e);
  }
};
