import { useState } from 'react';
import Navbar from './pages/NavBar.tsx';
import SignUp from './pages/Signup.tsx';
import SignIn from './pages/Signin.tsx';
// import Blogs from './pages/SingleTopicBlogs.tsx';
import Blogs from './pages/RandomBlogs.tsx';
import CommentsDrawer from './components/pages/commentsDrawer/CommentsDrawer.tsx';
import SimpleTextEditor from './components/SimpleTextEditor.tsx';
import MenuComponent from './components/pages/commentsDrawer/DialogMenu.tsx';

import {
    AnimatePresence,
    motion,
    useScroll,
    useMotionValueEvent,
} from 'motion/react';

function App() {
	const { scrollY } = useScroll()
	const [scrollDirection, setScrollDirection] = useState("up")
	
	useMotionValueEvent(scrollY, 'change', current => {
        const diff = current - scrollY.getPrevious()!
        setScrollDirection(diff > 0 ? 'down' : 'up');
    });

    return (
        <div>
			<AnimatePresence>
				{scrollDirection === 'up' && <Navbar />}
			</AnimatePresence>
		</div>
    );
}

export default App;
