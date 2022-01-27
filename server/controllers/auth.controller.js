import { Created } from '../constants/responseCodes.enum';
import { createUserService } from '../services/auth.service';

export const createUser = async (req, res, next) => {
  try {
    res.status(Created).json(await createUserService(req.body));
  } catch (e) {
    next(e);
  }
};