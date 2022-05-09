import { Router } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import { create, findAll, findOne, remove, update } from './controllers.ts';

const router = (router: Router) => {
    router.get('/v1/pizza', findAll);
    router.get('/v1/pizza/:id', findOne);
    router.post('/v1/pizza', create);
    router.delete('/v1/pizza/:id', remove);
    router.patch('/v1/pizza/:id', update);
};

export default router;
