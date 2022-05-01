import { Router} from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import {
    findAll,
} from './controllers.ts';

const router = (router: Router) => {
  router.get("/v1/pizza", findAll)
};

export default router;