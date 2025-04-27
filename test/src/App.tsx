// import { useState } from 'react';
// import Navbar from './pages/NavBar.tsx';
// // import Blogs from './pages/SingleTopicBlogs.tsx';
// import Blogs from './pages/RandomBlogs.tsx';
// import CommentsDrawer from './components/pages/commentsDrawer/CommentsDrawer.tsx';
// import SimpleTextEditor from './components/SimpleTextEditor.tsx';
// import MenuComponent from './components/pages/commentsDrawer/DialogMenu.tsx';
// import SigninDialog from './components/pages/signin/SigninDialog.tsx';
// import SignupDialog from './components/pages/signup/SignupDialog.tsx';

// import {
//     AnimatePresence,
//     motion,
//     useScroll,
//     useMotionValueEvent,
// } from 'motion/react';

// function App() {
//     const { scrollY } = useScroll();
//     const [scrollDirection, setScrollDirection] = useState('up');

//     useMotionValueEvent(scrollY, 'change', current => {
//         const diff = current - scrollY.getPrevious()!;
//         setScrollDirection(diff > 0 ? 'down' : 'up');
//     });

//     return (
//         <div>
//             <AnimatePresence>
//                 {scrollDirection === 'up' && <Navbar />}
//             </AnimatePresence>

//         </div>
//     );
// }

// export default App;

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { gql, useMutation } from '@apollo/client';
import app from '../firebase';

const SIGNIN_MUTATION = gql`
    mutation CreateUser(
        $firebaseID: String!
        $email: String!
        $username: String!
    ) {
        createUser(firebaseID: $firebaseID, email: $email, username: $username)
    }
`;

export default function App() {
	const [mutateFunction, { data, loading, error }] = useMutation(SIGNIN_MUTATION);

    const Signin = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        auth.useDeviceLanguage();

        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential!.accessToken;
            const user = result.user;
            const idToken = user.getIdToken();
            console.log(token, user, idToken);
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        }
    };

    return (
        <button
            onClick={() => Signin()}
            className="bg-black text-white border border-white"
        >
            Sign in with google
        </button>
    );
}
