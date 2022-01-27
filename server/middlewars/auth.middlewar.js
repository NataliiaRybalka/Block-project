import { BadRequest } from '../constants/responseCodes.enum';
import { checkIsUserPresentRepository } from '../repositories/user.repository';
import { createUserData } from '../validators/auth.validator';

export const checkDataValidity = async(req, res, next) => {
  try {
    const { error } = await createUserData.validate(req.body);

    if (error) {
      throw new Error('Wrong data');
    }

    next();
  } catch (e) {
    res.status(BadRequest).json(e.errors);
  }
};

export const checkIsEmailBusy = async (req, res, next) => {
  try {
    const { email } = req.body;

    let user = await checkIsUserPresentRepository(email);

    if (user) {
      throw new Error('This email has already registered');
    }

    next();
  } catch (e) {
    res.status(Unauthorized).json(e.errors);
  }
};