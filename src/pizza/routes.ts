import { Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import { findAll, findOne } from './controllers.ts';

const router = (router: Router) => {
    router.get('/v1/pizza', findAll);
    router.get('/v1/pizza/:id', findOne);
};

export default router;
