import { BadRequest } from '../constants/responseCodes.enum';
import { hashPassword } from '../helpers/passwordHasher';
import registrRepository from '../repositories';
import userRepository from '../repositories';
import tokenService from './tokens.service';

export const createUserService = async (userData) => {
  try {
      const { login, email, password } = userData;
      const hashedPassword = await hashPassword(password);

      let arrayUsers = await userRepository.getUsers();
      arrayUsers = arrayUsers.toJSON();

      if (!arrayUsers.length) {
          await registrRepository.createUser(login, email, hashedPassword);
      }

      let user = await userRepository.getUserByEmail(email);
      user = user.toJSON();

      await tokenService.createTokens(user.id);
      const userTokens = await tokenService.getTokens(user.id);

      return {
          user,
          userTokens
      };
  } catch (e) {
      throw new Error(BadRequest, 'User was not created.');
  }
};
