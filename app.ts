import { Application} from 'https://deno.land/x/oak@v6.0.1/mod.ts';

const app = new Application();

app.listen({ port: 3000 });
console.log(`HTTP webserver running. Access it at: http://localhost:3000/`);