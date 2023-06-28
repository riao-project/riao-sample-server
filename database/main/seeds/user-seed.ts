import { like } from '@riao/dbal';
import { Seed } from '@riao/dbal/seed';

export default class UserSeed extends Seed {
	public async up(): Promise<void> {
		await this.query.insert({
			table: 'user',
			records: [
				{ email: 'tom@example.com', password: 'password123' },
				{ email: 'bob@example.com', password: 'password567' },
			],
		});
	}

	public async down(): Promise<void> {
		await this.query.delete({
			table: 'user',
			where: {
				email: like('%@example.com'),
			},
		});
	}
}
