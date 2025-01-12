import { BrowserRouter, Routes, Route } from 'react-router'

import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import PrivateRoute from './components/PrivateRoute'
import SavedBlogs from './pages/SavedBlogs'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App