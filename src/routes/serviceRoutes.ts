import { Router } from 'express';

import { requireAuth } from '../middleware';
import {
	postPassword,
	getPassword,
	putPassword,
	deletePassword,
} from '../controllers/serviceController';
const router = Router();

router.get('/', requireAuth, getPassword);
router.post('/', requireAuth, postPassword);
router.put('/', requireAuth, putPassword);
router.delete('/', requireAuth, deletePassword);

export { router as serviceRoutes };
