import { Router } from 'express';

import { checkAccessToken } from '../middlewars/token.middlewar';
import { getBlocks, changePowerbankInStock } from '../controllers/block.controller';

const router = Router();

router.get(
    '/',
    getBlocks
);

router.put(
    '/:id',
    checkAccessToken,
    changePowerbankInStock
);

export default router;
