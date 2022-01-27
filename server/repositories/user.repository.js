import { NotFound } from '../constants/responseCodes.enum';
import { User } from '../database/models/User';

export const getUserByEmailRepository = async (email) => {
  try {
    return await User.where({ email }).fetchAll();
  } catch (e) {
    throw new ErrorHandler(NotFound, 'User not found');
  }
};

export const getUsersRepository = async () => {
  try {
    return await User.fetchAll();
  } catch (e) {
    throw new ErrorHandler(NotFound, 'Users not found');
  }
};

export const checkIsUserPresentRepository = async (email) => {
  try {
    return await User.where({ email }).fetch();
  } catch (e) {
    console.log(e);
  }
};