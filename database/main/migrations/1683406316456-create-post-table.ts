import { ColumnType, Migration } from '@riao/dbal';

export default class CreatePostTable extends Migration {
	async up() {
		await this.ddl.createTable({
			name: 'sample_posts',
			columns: [
				{
					name: 'id',
					type: ColumnType.BIGINT,
					autoIncrement: true,
					primaryKey: true,
				},
				{
					name: 'user_id',
					type: ColumnType.BIGINT,
					required: true,
				},
				{
					name: 'name',
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

		await this.ddl.addForeignKey({
			table: 'sample_posts',
			columns: ['user_id'],
			referencesTable: 'sample_users',
			referencesColumns: ['id'],
		});
	}

	async down() {
		await this.ddl.dropTable({ tables: 'sample_posts' });
	}
}
