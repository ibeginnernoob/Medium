import { useState } from 'react';
import Navbar from './pages/NavBar.tsx';
import SignUp from './pages/Signup.tsx';
import SignIn from './pages/Signin.tsx';
// import Blogs from './pages/SingleTopicBlogs.tsx';
import Blogs from './pages/RandomBlogs.tsx';
import CommentsDrawer from './components/pages/commentsDrawer/CommentsDrawer.tsx';
import SimpleTextEditor from './components/simpleTextEditor.tsx';
import MenuComponent from './components/pages/commentsDrawer/DialogMenu.tsx';

function App() {
    return (
        <div>						
			<Navbar />
        </div>
    );
}

export default App;
