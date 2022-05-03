import { Context, helpers } from 'https://deno.land/x/oak@v6.0.1/mod.ts';

async function findAll({ response }: Context) {
    response.status = 200;
    response.body = {
        success: true,
        message: 'find all Pizza',
    };
}

async function findOne(context: Context) {
    const { id } = helpers.getQuery(context, { mergeParams: true });
    const { response } = context;

    try {
        response.status = 200;
        response.body = {
            success: true,
            message: `Pizza resource #${id}`,
        };
    } catch (err) {
        response.status = 500;
        response.body = { message: err.message };
    }
}

export { findAll, findOne };
