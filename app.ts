import { Application } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import { config } from "https://deno.land/std@0.137.0/dotenv/mod.ts";

const env = await config();
const port = Number(env.PORT) || 3000;
const app = new Application();

app.listen({ port });
console.log(`Running at http://localhost:${port}/`);