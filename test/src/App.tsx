import { useState } from 'react';
import NavBar from './components/NavBar';
import Signup from './pages/Signup';
import BlogEditor from './components/BlogEditor';
import {
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from 'motion/react';


function App() {
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState('up');

    useMotionValueEvent(scrollY, 'change', current => {
        const diff = current - scrollY.getPrevious()!;
        setScrollDirection(diff > 0 ? 'down' : 'up');
    });

    return (
        <div>
            {/* <AnimatePresence>
                {scrollDirection === 'up' && <NavBar />}
            </AnimatePresence> */}
			<BlogEditor />
			{/* <Signup /> */}
        </div>
    );
}

export default App;

// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { gql, useMutation } from '@apollo/client';
// import app from '../firebase';

// const SIGNIN_MUTATION = gql`
//     mutation CreateUser(
//         $firebaseID: String!
//         $email: String!
//         $username: String!
//     ) {
//         createUser(firebaseID: $firebaseID, email: $email, username: $username) {
// 			msg
// 		}
//     }
// `;

// export default function App() {
// 	const [mutateFunction, { data, loading , error }] = useMutation(SIGNIN_MUTATION);

//     const Signin = async () => {
//         const provider = new GoogleAuthProvider();
//         const auth = getAuth(app);
//         auth.useDeviceLanguage();

//         try {
//             const result = await signInWithPopup(auth, provider);
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential!.accessToken;
//             const user = result.user;
//             const idToken = user.getIdToken();
//             console.log(token, user, idToken);
// 			await mutateFunction({
// 				variables: {
// 					firebaseID: '1',
// 					email: 'adheilgupta@gmail.com',
// 					username: 'Adheil GUpta'
// 				}
// 			})			
//         } catch (error: any) {
//             // const errorCode = error.code;
//             // const errorMessage = error.message;
//             // const email = error.customData.email;
//             // const credential = GoogleAuthProvider.credentialFromError(error);
// 			console.log(error)
//         }
//     };

//     return (
//         <button
//             onClick={async () => await Signin()}
//             className="bg-black text-white border border-white"
//         >
//             Sign in with google
//         </button>
//     );
// }
