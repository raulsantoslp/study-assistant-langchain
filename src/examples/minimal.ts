/**
 * Minimal LangChain example:
 * - Loads .env
 * - Creates an OpenAI chat model via LangChain
 * - Runs a simple prompt and prints the response
 */

import { env } from '../config/env.js';
import { ChatOpenAI } from '@langchain/openai';
import { HumanMessage } from '@langchain/core/messages';

async function main(): Promise<void> {
	const model = new ChatOpenAI({
		apiKey: env.OPENAI_API_KEY,
		model: 'gpt-4o-mini',
		temperature: 0.1,
	});

	const response = await model.invoke([new HumanMessage('Say a concise hello for a study app.')]);
	console.log('Model output:', response.content);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});


