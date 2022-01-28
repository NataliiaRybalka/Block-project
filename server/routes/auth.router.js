import { Router } from 'express';

import { checkDataValidity, checkIsEmailBusy, checkIsEmailCorrect } from '../middlewars/auth.middlewar';
import { checkRefreshToken } from '../middlewars/token.middlewar';
import { createUser, loginUser, createNewTokenPair } from '../controllers/auth.controller';

const router = Router();

router.post(
    '/registration',
    checkDataValidity,
    checkIsEmailBusy,
    createUser
);

router.post(
    '/login',
    checkIsEmailCorrect,
    loginUser
);

router.post(
    '/create-tokens',
    checkRefreshToken,
    createNewTokenPair
);

export default router;
