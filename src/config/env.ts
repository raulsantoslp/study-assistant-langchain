import 'dotenv/config';
import { z } from 'zod';

const EnvSchema = z.object({
	OPENAI_API_KEY: z.string().min(1, 'OPENAI_API_KEY is required'),
	// Future: model selection, ports, etc.
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
	const formatted = parsed.error.flatten().fieldErrors;
	throw new Error(
		`Invalid environment configuration. Missing or invalid keys: ${JSON.stringify(
			formatted,
		)}`,
	);
}

export const env = parsed.data;


