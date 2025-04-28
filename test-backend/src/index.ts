import { app  } from '@getcronit/pylon';
import { getClient } from './prismaClient';

import createUser from './mutations/auth/createUser';

app.use('/graphql', async (ctx, next) => {
    const db = getClient();
    ctx.set('db', db)
	next()
})

export const graphql = {
    Query: {
        hello: () => {
            return 'Hello, world!';
        },
    },
    Mutation: {
        createUser
    },
};

export default app;