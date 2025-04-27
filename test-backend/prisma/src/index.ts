// import { PrismaClient } from '@prisma/client/edge';
// import { withAccelerate } from '@prisma/extension-accelerate';

// declare global {
//     var prisma: PrismaClient | undefined
// }

// const db = globalThis.prisma || new PrismaClient().$extends(withAccelerate());

// if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

// export default db

import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

let prismaClientSingleton: ReturnType<typeof createPrismaClient> | undefined;

function createPrismaClient() {
    return new PrismaClient().$extends(withAccelerate());
}

function getPrismaClient() {
    if (process.env.NODE_ENV === 'development' && !prismaClientSingleton) {
        prismaClientSingleton = createPrismaClient();
    }

    return (
        prismaClientSingleton ?? (prismaClientSingleton = createPrismaClient())
    );
}

const db = getPrismaClient();
export default db;
