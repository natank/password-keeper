import { Response, Request, NextFunction, ErrorRequestHandler } from 'express';
import { Router } from 'express';
import { authRoutes } from './authRoutes';
import { serviceRoutes } from './serviceRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/service', serviceRoutes);

router.use((error: any, req: Request, res: Response, next: NextFunction) => {
	const status = error.statusCode || 500;
	const message = error.message;
	const data = error.data;
	res.status(status).json({ message: message, data: data });
});
export { router };
