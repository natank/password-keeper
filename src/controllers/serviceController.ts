import { Response, NextFunction } from 'express';
import { IRequestWithBody } from '../interfaces';
import {
	createPassword,
	findPassword,
	updatePassword,
	removePassword,
	PasswordError,
} from '../model';

export function postPassword(
	req: IRequestWithBody,
	res: Response,
	next: NextFunction
): void {
	const { service, password } = req.body;
	try {
		if (!service || !password) {
			next({ statusCode: 400, message: 'Not Authenticated' });
		} else {
			createPassword({ service, password });
			res.status(200).send();
		}
	} catch (err) {
		if (err.code === PasswordError.SERVICE_EXISTS) {
			next({ statusCode: 400, message: 'Not Authenticated' });
		} else {
			next({ statusCode: 500, message: 'Server Error' });
		}
	}
}

export function getPassword(
	req: IRequestWithBody,
	res: Response,
	next: NextFunction
): void {
	const { service } = req.body;
	console.log(`service=${service}`);
	try {
		console.log('get password');
		if (service) {
			const password = findPassword({ service });

			res.status(200).send({ password, service });
		} else {
			console.log('service not found');
			next({ statusCode: 400, message: 'Not Authenticated' });
		}
	} catch (err) {
		if ((err.code = PasswordError.NO_PASSWORD)) {
			next({ statusCode: 400, message: 'Not Found' });
		} else {
			next({ statusCode: 500, message: 'Server Error' });
		}
	}
}

export function putPassword(
	req: IRequestWithBody,
	res: Response,
	next: NextFunction
): void {
	const { service, password } = req.body;
	try {
		if (service && password) {
			updatePassword({ service, password });
			res.status(200).send();
		} else {
			next({ statusCode: 500, message: 'Server Error' });
		}
	} catch (err) {
		if ((err.code = PasswordError.NO_PASSWORD)) {
			next({ statusCode: 400, message: 'Not Authenticated' });
		}
	}
}

export function deletePassword(
	req: IRequestWithBody,
	res: Response,
	next: NextFunction
): void {
	const { service } = req.body;
	try {
		if (service) {
			console.log('service exists');
			removePassword({ service });
			res.status(200).send();
		} else {
			next({ statusCode: 400, message: 'Not Authenticated' });
		}
	} catch (err) {
		if ((err.code = PasswordError.NO_PASSWORD)) {
			next({ statusCode: 400, message: 'Not Authenticated' });
		}
	}
}
