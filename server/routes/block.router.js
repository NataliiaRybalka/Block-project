import { Router } from 'express';

import { getBlocks } from '../controllers/block.controller';

const router = Router();

router.get(
    '/',
    getBlocks
);

export default router;
