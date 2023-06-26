import { maindb } from '../database/main';
import { log } from './log';

/**
 * Initialize & register your app's services here
 */
export async function register(): Promise<void> {
	log.info('Booting...'); 
	// Register services here
	await maindb.init(); // <<< Add this line!
}

/**
 * Teardown services here
 */
export async function teardown(): Promise<void> {
	log.info('Tearing down...');

	// Teardown services here
	await maindb.disconnect(); // <<< Add this line!
}
