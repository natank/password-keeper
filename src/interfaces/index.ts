import { Request, Response } from 'express';

export interface IRequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

export interface IError {
	statusCode: Number;
	message: String;
}
