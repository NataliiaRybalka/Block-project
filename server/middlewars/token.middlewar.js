import { Unauthorized } from '../constants/responseCodes.enum';
import { verifyToken } from '../helpers/token.helper';
import { getTokenByATRepository, getTokenByRTRepository } from '../repositories/token.repository';

export const checkAccessToken = async (req, res, next) => {
  try {
    const token = req.get('Authorization');

    await verifyToken(token);

    let userTokens = await getTokenByATRepository(token);
    userTokens = userTokens.toJSON();

    if (!userTokens) {
      throw new ErrorHandler(Unauthorized, 'Wrong token');
    }

    req.userId = userTokens.user_id;

    next();
  } catch (e) {
    res.status(Unauthorized).json('Wrong token');
  }
};

export const checkRefreshToken = async (req, res, next) => {
  try {
  const token = req.get(REFRESH_TOKEN);

    let userTokens = await getTokenByRTRepository(token);
    userTokens = userTokens.toJSON();

    const { expiresIn,  created_at } = userTokens;
    if (!userTokens || ((expiresIn + created_at) < Date.now())) {
      throw new ErrorHandler(Unauthorized, 'Wrong token');
    }

    req.userId = userTokens.user_id;

    next();
  } catch (e) {
    res.status(Unauthorized).json('Wrong token');
  }
};