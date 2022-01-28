import { generateTokenPair } from '../helpers/token.helper';
import { createTokensRepository, getTokenByUserIdRepository } from '../repositories/token.repository';

export const createTokensService = async (userId) => {
  try {
    const {accessToken, refreshToken} = await generateTokenPair(userId);
    return await createTokensRepository(userId, accessToken, refreshToken);
  } catch (e) {
    throw new ErrorHandler(e.status, e.message);
  }
};

export const getTokensRegistrService = async (userId) => {
  try {
    let tokens = await getTokenByUserIdRepository(userId);
    tokens = tokens.toJSON();
    return tokens[0];
  } catch (e) {
    throw new ErrorHandler(e.status, e.message);
  }
};

export const getTokensLoginService = async (userId) => {
  try {
    return await getTokenByUserIdRepository(userId);
  } catch (e) {
    throw new ErrorHandler(e.status, e.message);
  }
};
