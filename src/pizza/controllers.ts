import { Context, helpers } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import Pizza from './pizza.ts';

async function findAll({ response }: Context) {
    try {
        const pizza = await Pizza.all();
        response.status = 200;
        response.body = {
            success: true,
            data: pizza,
        };
    } catch (error) {
        response.status = 500;
        response.body = { message: error.message };
    }
}

async function findOne(context: Context) {
    const { id } = helpers.getQuery(context, { mergeParams: true });
    const { response } = context;

    try {
        const pizza = await Pizza.find(+id);
        if (pizza) {
            response.status = 200;
            response.body = {
                success: true,
                data: pizza,
            };
        } else {
            response.status = 404;
            response.body = {
                success: false,
                message: 'resource not found',
            };
        }
    } catch (error) {
        console.log(error);
        response.status = 500;
        response.body = { message: error.message };
    }
}

export { findAll, findOne };
