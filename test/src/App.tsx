import { useState } from 'react';
import Navbar from './pages/NavBar.tsx';
import SignUp from './pages/Signup.tsx';
import SignIn from './pages/Signin.tsx';
import Blogs from './pages/Blogs.tsx';

function App() {
    return (
        <div>
            <Navbar />
			<Blogs />
        </div>
    );
}

export default App;
