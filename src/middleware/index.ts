import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import { IError } from '../interfaces';

const authError: IError = { statusCode: 401, message: 'Not Authenticated' };

export function requireAuth(
	req: Request,
	res: Response,
	next: NextFunction
): void {
	if (!req.headers['authorization']) {
		throw authError;
	}
	const token = <string>req.headers['authorization'].split(' ')[1];
	let jwtPayload;

	try {
		jwtPayload = <any>jwt.verify(token, config.accessSecret);
		res.locals.jwtPayload = jwtPayload;
		next();
	} catch (error) {
		throw authError;
	}
}
