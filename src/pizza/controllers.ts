import { Context, helpers } from 'https://deno.land/x/oak@v6.0.1/mod.ts';
import Pizza from './pizza.ts';

export async function findAll({ response }: Context) {
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

export async function findOne(context: Context) {
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
        response.status = 500;
        response.body = { message: error.message };
    }
}

export async function create(context: Context) {
    const { response, request } = context;

    try {
        // const pizza = new Pizza();
        // pizza.name = '하와이안피자';
        // pizza.description = '이게피자라고?';
        // await pizza.save();

        const body = request.body({ type: 'json' });
        const pizza = await body.value;
        const result = await Pizza.create(pizza);

        response.status = 200;
        response.body = {
            success: true,
            data: { id: result.lastInsertId },
        };
    } catch (error) {
        response.status = 500;
        response.body = { message: error.message };
    }
}
