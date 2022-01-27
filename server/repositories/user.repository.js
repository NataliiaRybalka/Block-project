import { NotFound, BadRequest } from '../constants/responseCodes.enum';
import { User } from '../database/models/User';

export const getUserByEmailRepository = async (email) => {
  try {
    return await User.where({ email }).fetch();
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

export const updateUserPowerbankRepository = async (id, powerbank_id) => {
  try {
    return await User.forge({ id }).save({ powerbank_id });
  } catch (e) {
    throw new Error(BadRequest, 'User powerbank was not updated');
  }
};
