import { env } from './config/env.js';

async function main(): Promise<void> {
	console.log('AI Study Assistant starting...');
	console.log('Env OK. Ready for next milestones.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});


