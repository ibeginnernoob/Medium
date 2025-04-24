import { useState } from 'react';
import Navbar from './pages/NavBar.tsx';
import SignUp from './pages/Signup.tsx';
import SignIn from './pages/Signin.tsx';
// import Blogs from './pages/SingleTopicBlogs.tsx';
import Blogs from './pages/RandomBlogs.tsx';

function App() {
    return (
        <div>
			<Blogs />
        </div>
    );
}

export default App;
