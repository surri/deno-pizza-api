import { Context } from 'https://deno.land/x/oak@v6.0.1/mod.ts';

async function findAll({ response }: Context) {
    response.status = 200;
    response.body = {
        success: true,
        msg: "find all Pizza",
    }
}

export {
    findAll,
}