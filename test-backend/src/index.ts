import {app} from '@getcronit/pylon'
import db from '../prisma/src/index'

const createUser = async (firebaseID: string, email: string, username: string) => {
	try {
		const res = await db.user.create({
			data: {
				username: username,
				email: email,
				firebaseID: firebaseID
			}
		})
		return "User generation successful"
	} catch (e: any) {
		console.log(e)
		return "User creation failed"
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