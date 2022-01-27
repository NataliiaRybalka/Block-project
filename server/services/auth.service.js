import { BadRequest, Unauthorized } from '../constants/responseCodes.enum';
import { hashPassword, comparePassword } from '../helpers/passwordHasher';
import { createUserRepository } from '../repositories/auth.repository';
import { getUserByEmailRepository } from '../repositories/user.repository';
import { createTokensService, getTokensRegistrService, getTokensLoginService } from './token.service';

export const createUserService = async (userData) => {
  try {
    const { login, email, password } = userData;
    const hashedPassword = await hashPassword(password);

    await createUserRepository(login, email, hashedPassword);

    let user = await getUserByEmailRepository(email);
    user = user.toJSON();

    await createTokensService(user.id);
    const userTokens = await getTokensRegistrService(user.id);

    return {
      user,
      userTokens
    };
  } catch (e) {
    throw new Error(BadRequest, 'User was not created.');
  }
};

export const loginUserService = async (userData) => {
  try {
    const { email, password } = userData;

    let user = await getUserByEmailRepository(email);
    user = user.toJSON();

    if (!user) {
      throw new Error(Unauthorized, 'Wrong email or password');
    }

    const isCompared = await comparePassword(password, user.password);
    if (!isCompared) {
      throw  new ErrorHandler(Unauthorized, 'Wrong email or password');
    }

    await createTokensService(user.id);
    let userTokens = await getTokensLoginService(user.id);
    userTokens = userTokens.toJSON();

    return {
      user,
      userTokens: userTokens[userTokens.length - 1]
  };
  } catch (e) {
      throw new Error(Unauthorized, 'Wrong email or password');
  }
};
