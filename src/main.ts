import { log } from './log';
import { env } from './env';
import { maindb } from '../database/main';
import { columnName } from '@riao/dbal';

class User {
	id?: number;
	email: string;
	password: string;
}

class Post {
	id?: number;
	user_id: number;
	name: string;
}

const users = maindb.getQueryRepository<User>({ table: 'sample_users' });
const posts = maindb.getQueryRepository<Post>({ table: 'sample_posts' });

/**
 * Start your application in the main() function
 */
export async function main(): Promise<void> {
	log.info('Hello ' + env.APP_TITLE);

	await users.insert({
		records: [
			{
				email: 'tom@tester.com',
				password: 'asdfa2342',
			},
		],
	});

	const allUsers = await users.find({
		where: { email: 'tom@tester.com' },
	});

	console.log(allUsers);
	// [ { id: 23, email: 'tom@tester.com', password: 'asdfa2342', } ]

	await users.update({
		set: { password: 'password1234' },
		where: { email: 'tom@tester.com' },
	});

	const user = await users.findOneOrFail({
		where: { email: 'tom@tester.com' },
	});

	console.log(user);
	// { id: 23, email: 'tom@tester.com', password: 'password1234' }

	await posts.insert({
		records: {
			user_id: user.id,
			name: 'My First Post',
		},
	});

	const post = await maindb.query.findOne({
		table: 'sample_posts',
		columns: ['sample_posts.id', 'sample_posts.name'],
		join: [
			{
				type: 'LEFT',
				table: 'sample_users',
				on: {
					'sample_users.id': columnName('sample_posts.user_id'),
				},
			},
		],
		where: {
			'sample_users.email': 'tom@tester.com',
		},
	});

	console.log(post);

	await posts.delete({
		where: { user_id: user.id },
	});

	await users.delete({
		where: { id: user.id },
	});
}
