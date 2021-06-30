import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { IRequestWithBody, IError } from '../interfaces';
import config from '../config';

export function postLogin(
	req: IRequestWithBody,
	res: Response,
	next: NextFunction
): void {
	console.log('log in');
	const { username, password } = req.body;
	console.log(`username: ${username}, password: ${password}`);
	if (username && password && username === 'abc' && password === '123456') {
		//Sign JWT, valid for 5 minutes
		const access_token = jwt.sign({ username }, config.accessSecret, {
			expiresIn: 5 * 60,
		});
		//Sign JWT, valid for 15 minutes
		const refresh_token = jwt.sign({ username }, config.refreshSecret, {
			expiresIn: 15 * 60,
		});
		res.status(200).json({ access_token, refresh_token });
	} else {
		next({ statusCode: 401, message: 'Not Authenticated' });
	}
}

export function putUpdateToken(
	req: IRequestWithBody,
	res: Response,
	next: NextFunction
): void {
	const { username, password } = req.body;
	const token = <string>req.headers['authorization']?.split(' ')[1];

	try {
		jwt.verify(token, config.refreshSecret);

		const access_token = jwt.sign({ username }, config.accessSecret, {
			expiresIn: 5 * 60,
		});
		const refresh_token = jwt.sign({ username }, config.refreshSecret, {
			expiresIn: 15 * 60,
		});
		res.status(200).json({ access_token, refresh_token });
	} catch (error) {
		next({ statusCode: 401, message: 'Not Authenticated' });
	}

	if (username && password && username === 'abc' && password === '123456') {
		//Sign Access JWT, valid for 5 minutes
		const access_token = jwt.sign({ username }, config.accessSecret, {
			expiresIn: 5 * 60,
		});
		//Sign Refresh JWT, valid for 15 minutes
		const refresh_token = jwt.sign({ username }, config.refreshSecret, {
			expiresIn: 15 * 60,
		});
		res.status(200).json({ access_token, refresh_token });
	} else {
		next({ statusCode: 401, message: 'Not Authenticated' });
	}
}
