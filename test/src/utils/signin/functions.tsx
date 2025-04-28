import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";

import app from '@/../firebase'

const emailPasswordSignin = async ({ email, password } : {
	email: string,
	password: string
}) => {
	const auth = getAuth(app)
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user: User = userCredential.user	
	} catch (e) {

	}
}