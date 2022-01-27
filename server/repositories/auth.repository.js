import { InternalServerError } from '../constants/responseCodes.enum';
import { User } from '../database/models/User';

export const createUserRepository = async (login, email, password) => {
  try {
    return await User.forge({
      login,
      email,
      password
    }).save();
  } catch (e) {
    throw new Error(InternalServerError, 'User was not created');
  }
};