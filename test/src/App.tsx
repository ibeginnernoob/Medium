import { useState } from 'react';
import Navbar from './pages/NavBar.tsx';
import SignUp from './pages/Signup.tsx';
import SignIn from './pages/Signin.tsx';
// import Blogs from './pages/SingleTopicBlogs.tsx';
import Blogs from './pages/RandomBlogs.tsx';
import CommentsDrawer from './components/CommentsDrawer.tsx';
import SimpleTextEditor from './components/simpleTextEditor.tsx';

function App() {
    return (
        <div>
			<Navbar />
			<CommentsDrawer />
			<div className='mt-40'>
				<SimpleTextEditor />
			</div>
        </div>
    );
}

export default App;
