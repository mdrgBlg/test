import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Users } from "./pages/userPage"
import { Posts } from "./pages/postPage"
import Navbar from './components/Navbar'




function App() {
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="posts" element={<Posts />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App
