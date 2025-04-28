import { PrismaClient } from './generated/prisma/edge.js'
import { withAccelerate } from '@prisma/extension-accelerate'

let db: any = null

export const getClient = () => {
	if (!db) {
		db = new PrismaClient({
			datasourceUrl: process.env.DATABASE_URL
		}).$extends(withAccelerate())
	}

	return db
}