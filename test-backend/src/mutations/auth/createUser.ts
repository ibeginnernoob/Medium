import { getContext } from "@getcronit/pylon";

declare module 'hono' {
	interface Context {
		db: any;
	}
}

const createUser = async (
    firebaseID: string,
    email: string,
    username: string
) => {
    try {
		const ctx = getContext()		
        const res = await ctx.db.user.create({
            data: {
                username: username,
                email: email,
                firebaseID: firebaseID,
            },
        });
        return {
            msg: 'User creation successful',
            user: {
                id: res.id,
                email: res.email,
            },
        };
    } catch (e: any) {
        console.log(e);
        return {
            msg: 'User creation failed',
        };
    }
};

export default createUser