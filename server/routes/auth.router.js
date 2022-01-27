import { Router } from 'express';

import { checkDataValidity, checkIsEmailBusy } from '../middlewars/auth.middlewar';
import { createUser } from '../controllers/auth.controller';

const router = Router();

router.post(
    '/registration',
    checkDataValidity,
    checkIsEmailBusy,
    createUser
);

// router.post(
//     '/login',
//     loginMiddlewar.checkIsEmailCorrect,
//     loginMiddlewar.checkIsEmailConfirmed,
//     loginMiddlewar.checkRole,
//     loginController.loginUser
// );

export default router;