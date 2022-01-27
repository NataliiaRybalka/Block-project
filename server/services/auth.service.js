import { BadRequest } from '../constants/responseCodes.enum';
import { hashPassword } from '../helpers/passwordHasher';
import { createUserRepository } from '../repositories/auth.repository';
import { getUserByEmailRepository, getUsersRepository } from '../repositories/user.repository';
import { createTokensService, getTokensService } from './token.service';

export const createUserService = async (userData) => {
  try {
    const { login, email, password } = userData;
    const hashedPassword = await hashPassword(password);

    let arrayUsers = await getUsersRepository();
    arrayUsers = arrayUsers.toJSON();

    if (!arrayUsers.length) {
      await createUserRepository(login, email, hashedPassword);
    }

    let user = await getUserByEmailRepository(email);
    user = user.toJSON();

    await createTokensService(user.id);
    const userTokens = await getTokensService(user.id);

    return {
      user,
      userTokens
    };
  } catch (e) {
    throw new Error(BadRequest, 'User was not created.');
  }
};
