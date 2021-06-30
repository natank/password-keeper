import { expect } from 'chai';
import request from 'supertest';

import { createServer } from '../server';
const app = createServer();

describe('auth routes', function () {
	it('/login responds with 401', function (done) {
		request(app).post('/auth/login').expect(401, done);
	});
	it('/login responds with 200', function (done) {
		request(app)
			.post('/auth/login')
			.send('username=abc')
			.send('password=123456')
			.expect(200)
			.end((err: any, res: any) => {
				if (err) {
					return done(err);
				}

				expect(res.body.access_token).to.be.not.empty;
				expect(res.body.refresh_token).to.be.not.empty;
				return done();
			});
	});
});
