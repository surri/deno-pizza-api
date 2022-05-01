import { Router} from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import pizzaRouter from '../pizza/routes.ts';
const router = new Router();
pizzaRouter(router);

router.get("/v1/ping", (context) => {
  context.response.status = 200
  context.response.body = {
    success: true,
    msg: "pong",
  };
});

export default router;