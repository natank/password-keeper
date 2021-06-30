import express, { Application, Request, Response } from 'express';
import { router } from './routes/router';

import cors from 'cors';

export function createServer() {
	const app: Application = express();

	const allowedOrigins = ['http://localhost:3000'];

	const options: cors.CorsOptions = {
		origin: allowedOrigins,
	};

	app.use(cors(options));
	app.use(express.urlencoded({ extended: true }));
	app.use(router);
	app.get('/', (req: Request, res: Response) => {
		res.status(200).end();
	});

	app.listen(3000, () => {
		console.log('Listenning on port 3000');
	});
	return app;
}
