import { ColumnType } from '@riao/dbal/column';
import { Migration } from '@riao/dbal/migration';

export default class CreateUserTable extends Migration {
	public async up() {
		await this.ddl.createTable({
			name: 'sample_users',
			columns: [
				{
					name: 'id',
					type: ColumnType.BIGINT,
					primaryKey: true,
					autoIncrement: true,
				},
				{
					name: 'email',
					type: ColumnType.VARCHAR,
					length: 255,
				},
				{
					name: 'password',
					type: ColumnType.VARCHAR,
					length: 255,
				},
				{
					name: 'created_at',
					type: ColumnType.TIMESTAMP,
					default: this.db.functions.currentTimestamp(),
				},
			],
		});

		await this.query.insert({
			table: 'sample_users',
			records: [{ email: 'test@example.com', password: 'password1234' }],
		});
	}

	public async down() {
		await this.ddl.dropTable({ tables: 'sample_users' });
	}
}
