import { BrowserRouter, Routes, Route } from 'react-router'

import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin.tsx'
import Blog from './pages/Blog.tsx'
import Blogs from './pages/Blogs.tsx'
import Publish from './pages/Publish'
import Spinner from './components/Spinner'

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/blogs/blog/:id' element={<Blog/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/publish' element={<Publish/>} />
          <Route path='/spinner' element={<Spinner/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App