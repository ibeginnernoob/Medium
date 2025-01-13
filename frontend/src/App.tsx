import { BrowserRouter, Routes, Route } from 'react-router'

import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import PrivateRoute from './components/PrivateRoute'
import SavedBlogs from './pages/SavedBlogs'
import ConfirmationModal from './components/ConfirmationModal'
import UserPosts from './pages/UserPosts'
import UpdateBlog from './pages/UpdateBlog'

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/blog/:id' element={<PrivateRoute/>}>
            <Route index element={<Blog/>} />
          </Route>
          <Route path='/' element={<PrivateRoute/>}>
            <Route index element={<Blogs />} />
          </Route>
          <Route path='/publish' element={<PrivateRoute/>}>
            <Route index element={<Publish/>} />
          </Route>
          <Route path='/saved' element={<PrivateRoute/>}>
            <Route index element={<SavedBlogs/>} />
          </Route>
          <Route path='/user-blogs' element={<PrivateRoute/>}>
            <Route index element={<UserPosts/>} />
          </Route>
          <Route path='/update/:id' element={<PrivateRoute/>}>
            <Route index element={<UpdateBlog/>} />
          </Route>
          <Route path='/testing' element={<ConfirmationModal/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App