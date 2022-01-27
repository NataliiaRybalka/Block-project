import { Router } from 'express';

import { checkAccessToken } from '../middlewars/token.middlewar';
import { getBlocks, changePowerbankInStock, getUserPowerbank } from '../controllers/block.controller';

const router = Router();

router.get(
    '/',
    getBlocks
);

router.get(
    '/:userId',
    checkAccessToken,
    getUserPowerbank
);

router.put(
    '/:id',
    checkAccessToken,
    changePowerbankInStock
);

export default router;
