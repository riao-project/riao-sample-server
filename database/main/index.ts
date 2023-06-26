import { DatabaseMsSql2017 } from 'riao-driver-mssql/src';

export default class MainDatabase extends DatabaseMsSql2017 {
	name = 'main';
}

export const maindb = new MainDatabase();
