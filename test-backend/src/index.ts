import { app } from '@getcronit/pylon'
import { PrismaClient } from './generated/prisma/edge.js'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'process'

const createUser = async (firebaseID: string, email: string, username: string) => {
	const db = new PrismaClient({
		datasourceUrl: env.DATABASE_URL
	}).$extends(withAccelerate())
	try {
		const res = await db.user.create({
			data: {
				username: username,
				email: email,
				firebaseID: firebaseID
			}
		})				
		return {
			msg: "User creation successful",
			user: {
				id: res.id,
				email: res.email
			}
		}
	} catch (e: any) {
		console.log(e)
		return {
			msg: "User creation failed"
		}
	}
}

export const graphql = {
  Query: {
    hello: () => {
      return 'Hello, world!'
    }
  },
  Mutation: {
	createUser
  }
}

export default app