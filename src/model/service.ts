export enum PasswordError {
	SERVICE_EXISTS,
	NO_PASSWORD,
}

let services: { service: string; password: string }[] = [];

export function createPassword({
	service,
	password,
}: {
	service: string;
	password: string;
}): void {
	if (services.some(item => item.service === service)) {
		throw { code: PasswordError.SERVICE_EXISTS };
	} else {
		services = [...services, { service, password }];
	}
}

export function findPassword({ service }: { service: string }): string {
	const entry = services.find(password => password.service === service);
	if (entry) {
		return entry.password;
	} else {
		console.log('cant find password');
		throw { code: PasswordError.NO_PASSWORD };
	}
}

export function updatePassword({
	service,
	password,
}: {
	service: string;
	password: string;
}): void {
	const entry = services.find(password => password.service === service);
	if (entry) {
		entry.password = password;
	} else {
		throw { code: PasswordError.NO_PASSWORD };
	}
}

export function removePassword({ service }: { service: string }): void {
	const lengthBefore = services.length;

	services = services.filter(password => password.service !== service);
	const lengthAfter = services.length;

	if (lengthBefore === lengthAfter) {
		throw { code: PasswordError.NO_PASSWORD };
	}
}
