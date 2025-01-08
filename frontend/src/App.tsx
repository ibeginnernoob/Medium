import { BrowserRouter, Routes, Route } from 'react-router'

import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import PrivateRoute from './components/PrivateRoute'

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/blogs/blog/:id' element={<PrivateRoute/>}>
            <Route index element={<Blog/>} />
          </Route>
          <Route path='/blogs' element={<PrivateRoute/>}>
            <Route index element={<Blogs />} />
          </Route>
          <Route path='/publish' element={<PrivateRoute/>}>
            <Route index element={<Publish/>} />
          </Route>
          {/* <Route path='/blogs' element={<PrivateRoute/>}>
            <Route path='/spinner' element={<Spinner/>} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App