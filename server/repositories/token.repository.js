import { InternalServerError, NotFound } from '../constants/responseCodes.enum';
import { UserToken } from '../database/models/UserToken';

export const createTokensRepository = async (user_id, access_token, refresh_token) => {
  try {
    return await UserToken.forge({
      user_id,
      access_token,
      refresh_token: refresh_token.refresh_token,
      expiresIn: refresh_token.expiresIn,
      created_at: new Date()
    }).save();
  } catch (e) {
    throw new ErrorHandler(InternalServerError, 'Tokens not created');
  }
};

export const getTokenByUserIdRepository = async (user_id) => {
  try {
    return await UserToken.where({ user_id }).fetchAll();
  } catch (e) {
    throw new ErrorHandler(NotFound, 'Tokens not found');
  }
};

export const getTokenByATRepository = async (access_token) => {
  try {
    return await UserToken.where({ access_token }).fetch();
  } catch (e) {
    throw new ErrorHandler(NotFound, 'Token not found');
  }
};

export const getTokenByRTRepository = async (refresh_token) => {
  try {
    return await UserToken.where({ refresh_token }).fetch();
  } catch (e) {
    throw new ErrorHandler(NotFound, 'Token not found');
  }
};