import { config } from "dotenv";
import { z } from "zod";

const appEnv = process.env.APP_ENV ? `.env.${process.env.APP_ENV}` : "";

config({ path: `./envs/${appEnv}` });

const envSchema = z.object({
  APP_ENV: z.enum(["local", "production", "staging"]).default("local"),
  PORT: z.string(),
  DATABASE_URL: z.string(),
});

const envParse = envSchema.safeParse(process.env);

if (!envParse.success) {
  console.error("Invalid environment variables", envParse.error.format());
  process.exit(1);
}

const env = envParse.data;
export { env, envSchema };
