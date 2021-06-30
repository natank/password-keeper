import { Router } from 'express';

import { postLogin, putUpdateToken } from '../controllers/authController';

const router = Router();

router.post('/login', postLogin);
router.put('/updateToken', putUpdateToken);

export { router as authRoutes };
