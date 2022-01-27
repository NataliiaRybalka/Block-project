// import userRepository from '#repositories/user/user.repository';
import { BadRequest } from '../constants/responseCodes.enum';
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

    let user = await userRepository.checkIsUserPresent(email);

    if (user) {
      throw new Error('This email has already registered');
    }

    next();
  } catch (e) {
    res.status(Unauthorized).json(e.errors);
  }
};