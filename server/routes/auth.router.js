import { Router } from 'express';

import { checkDataValidity, checkIsEmailBusy, checkIsEmailCorrect } from '../middlewars/auth.middlewar';
import { createUser, loginUser } from '../controllers/auth.controller';

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

export default router;
