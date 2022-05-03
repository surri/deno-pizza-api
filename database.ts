import { MySQLConnector, Database } from 'https://deno.land/x/denodb/mod.ts';
import { config } from "https://deno.land/std@0.137.0/dotenv/mod.ts";

const env = await config();

export default new Database(
    new MySQLConnector({
        database: env.MYSQL_DATABASE || 'denopizza',
        host: env.MYSQL_HOST || '127.0.0.1',
        username: env.MYSQL_USERNAME || 'denopizza',
        password: env.MYSQL_PASSWORD || 'denopizza',
        port: Number(env.MYSQL_PORT) || 3306,
    })
);